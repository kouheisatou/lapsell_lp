import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const url = process.env.URL ?? "http://localhost:5180";
const outDir = join(process.cwd(), "shots") + "/";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(2800); // ヒーローの登場アニメーション待ち

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const steps = 14;
for (let i = 0; i <= steps; i++) {
  const y = Math.round((totalHeight - 900) * (i / steps));
  await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
  await page.waitForTimeout(650);
  await page.screenshot({ path: `${outDir}shot-${String(i).padStart(2, "0")}.png` });
}

console.log("total height:", totalHeight);
console.log("console errors:", errors.length ? errors : "none");
await browser.close();
