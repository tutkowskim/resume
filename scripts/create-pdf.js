const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
 
const generatePdfFromUrl = async (url) => {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'Letter', printBackground: true });
 
  await browser.close();
  return pdf;
}

const buildDir = path.join(__dirname, '..', 'build');
const sourceHtmlUrl = 'file://' + path.join(buildDir, 'resume.html');
const pdf = path.join(buildDir, 'mark_tutkowski.pdf');

console.log(`Generating PDF from ${sourceHtmlUrl} to ${pdf}`);
generatePdfFromUrl(sourceHtmlUrl).then(buffer => fs.writeFileSync(pdf, buffer));
