const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    
    console.log('Navigating to root...');
    await page.goto('http://localhost:3012/', { waitUntil: 'networkidle2' });
    
    const content = await page.content();
    console.log('Page loaded with content! Length:', content.length);
    
    await browser.close();
  } catch (err) {
    console.error('SCRIPT ERROR:', err);
  }
})();
