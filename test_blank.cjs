const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    
    console.log('Navigating...');
    await page.goto('http://localhost:3012/products/restaurant-pos-system', { waitUntil: 'networkidle0' });
    
    const content = await page.content();
    if (content.includes('Product Not Found')) {
      console.log('Page says Product Not Found!');
    } else if (content.length < 500) {
      console.log('Page is very blank! Length:', content.length);
    } else {
      console.log('Page loaded with content! Length:', content.length);
    }
    
    await browser.close();
  } catch (err) {
    console.error('SCRIPT ERROR:', err);
  }
})();
