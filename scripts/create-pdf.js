const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
 
const generatePdfFromUrl = async (url) => {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: [
      '--no-sandbox',
      '--font-render-hinting=none',
    ],
  });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");
  await page.goto(url, {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'Letter', printBackground: true });
 
  await browser.close();
  return pdf;
}

const pdfName = 'mark_tutkowski.pdf'
const buildDir = path.join(__dirname, '..', 'build');
const sourceHtmlUrl = 'file://' + path.join(buildDir, 'resume.html');
const buildDirPdf = path.join(buildDir, pdfName);
const devDirPdf = path.join(__dirname, '..', 'public', pdfName)

console.log(`Generating PDF from ${sourceHtmlUrl} to ${buildDirPdf} and ${devDirPdf}`);
generatePdfFromUrl(sourceHtmlUrl)
  .then(buffer => {
    fs.writeFileSync(buildDirPdf, buffer);
    fs.writeFileSync(devDirPdf, buffer);
  });