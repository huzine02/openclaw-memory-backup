const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1584, height: 396, deviceScaleFactor: 2 });
  await page.goto('file:///C:/Users/huzine/.openclaw/workspace/linkedin-banner.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:/Users/huzine/.openclaw/workspace/linkedin-banner-v4.png', fullPage: true });
  await browser.close();
  console.log('Done: linkedin-banner-v4.png (3168x792 @2x)');
})();
