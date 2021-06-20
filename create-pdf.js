const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
 
const generatePdfFromUrl = async (url) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4', printBackground: true });
 
  await browser.close();
  return pdf
}

const sourceHtmlUrl = 'file://' + path.join(__dirname, 'build', 'index.html')
const pdf = path.join(__dirname, 'build', 'mark_tutkowski.pdf')

console.log(`Generating PDF from ${sourceHtmlUrl} to ${pdf}`)
generatePdfFromUrl(sourceHtmlUrl).then(buffer => fs.writeFileSync(pdf, buffer))
