const { spawn } = require('child_process');
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

  let pdf = null;
  try {
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");
    await page.goto(url, {waitUntil: 'networkidle0'});
    pdf = await page.pdf({ format: 'Letter', printBackground: true });
  } finally {
    await browser.close();
  }
  
  return pdf;
}

const sourceHtmlUrl = 'http://localhost:3000?formatToPrint=true';

const pdfName = 'mark_tutkowski.pdf'
const buildDir = path.join(__dirname, 'build');
const buildDirPdf = path.join(buildDir, pdfName);
const devDirPdf = path.join(__dirname, 'public', pdfName)

const serve = spawn('npx', ['serve', '-s', 'build']);
serve.stdout.on('data', (data) => {
  console.log('serve - ' + data)

  if (data.includes('Accepting connections')) {
    console.log(`Generating PDF from ${sourceHtmlUrl} to ${buildDirPdf} and ${devDirPdf}`);
    generatePdfFromUrl(sourceHtmlUrl)
        .then(buffer => {
          fs.writeFileSync(buildDirPdf, buffer);
          fs.writeFileSync(devDirPdf, buffer);
          console.log('Killing serve')
          serve.kill();
        });
  }
});
