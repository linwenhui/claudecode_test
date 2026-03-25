#!/usr/bin/env node

import { spawn, execSync } from "node:child_process";
import puppeteer from "puppeteer-core";

const useProfile = process.argv[2] === "--profile";

if (process.argv[2] && process.argv[2] !== "--profile") {
	console.log("Usage: start.js [--profile]");
	console.log("\nOptions:");
	console.log("  --profile  Copy your default Chrome profile (cookies, logins)");
	console.log("\nExamples:");
	console.log("  start.js            # Start with fresh profile");
	console.log("  start.js --profile  # Start with your Chrome profile");
	process.exit(1);
}

// Detect platform and set Chrome path
const platform = process.platform;
let chromePath;
let profilePath;
let killCommand;

if (platform === "darwin") {
	chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
	profilePath = process.env["HOME"] + "/Library/Application Support/Google/Chrome/";
	killCommand = "killall 'Google Chrome'";
} else if (platform === "linux") {
	// Try common Linux Chrome paths
	chromePath = process.env["CHROME_BIN"] ||
		"/usr/bin/google-chrome" ||
		"/usr/bin/google-chrome-stable" ||
		"/usr/bin/chromium-browser" ||
		"/usr/bin/chromium";
	profilePath = process.env["HOME"] + "/.config/google-chrome/";
	killCommand = "pkill -f 'chrome|chromium'";
} else if (platform === "win32") {
	chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
	profilePath = process.env["USERPROFILE"] + "\\AppData\\Local\\Google\\Chrome\\User Data\\";
	killCommand = "taskkill /F /IM chrome.exe";
}

// Kill existing Chrome
try {
	execSync(killCommand, { stdio: "ignore" });
} catch {}

// Wait a bit for processes to fully die
await new Promise((r) => setTimeout(r, 1000));

// Setup profile directory
execSync("mkdir -p ~/.cache/browser-tools", { stdio: "ignore" });

if (useProfile && platform !== "win32") {
	// Sync profile with rsync (much faster on subsequent runs)
	// Adjust the path based on your system
	execSync(
		`rsync -a --delete "${profilePath}" ~/.cache/browser-tools/`,
		{ stdio: "pipe" },
	);
}

// Start Chrome in background (detached so Node can exit)
spawn(
	chromePath,
	["--remote-debugging-port=9222", "--no-sandbox", `--user-data-dir=${process.env["HOME"]}/.cache/browser-tools`],
	{ detached: true, stdio: "ignore" },
).unref();

// Wait for Chrome to be ready by attempting to connect
let connected = false;
for (let i = 0; i < 30; i++) {
	try {
		const browser = await puppeteer.connect({
			browserURL: "http://localhost:9222",
			defaultViewport: null,
		});
		await browser.disconnect();
		connected = true;
		break;
	} catch {
		await new Promise((r) => setTimeout(r, 500));
	}
}

if (!connected) {
	console.error("✗ Failed to connect to Chrome");
	process.exit(1);
}

console.log(`✓ Chrome started on :9222${useProfile ? " with your profile" : ""}`);
