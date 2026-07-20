const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1512, height: 795});
  await page.goto('http://localhost:3012/products/restaurant-pos-system?t=12345678', { waitUntil: 'networkidle2' });
  await page.screenshot({path: 'public/screenshot.png', fullPage: true});
  await browser.close();
})();
