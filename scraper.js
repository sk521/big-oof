const puppeteer = require('puppeteer');

async function scrapeBigO(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$$('a[class="search-result-heading"]');
  console.log('el: ', el)
  // const txt = await el.getProperty('textContent');
  // const jobTitle = await txt.jsonValue();

  // const dummyData = await page.$('a[class="search-result-heading"]');
  // console.log('myDummyDataa: ', dummyData);

  // console.log({ jobTitle });
  await browser.close();
}

scrapeBigO('https://www.bigoofn.com/search');


/*
const elementHandle = await page.$('a[href="/test2"]');
*/
