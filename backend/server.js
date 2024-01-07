const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const allowedDomains = ['toscrape.com'];
const startUrl = 'http://books.toscrape.com/';

async function crawl() {
  const queue = [startUrl];
  const visited = new Set();

  while (queue.length > 0) {
    const url = queue.shift();

    if (!visited.has(url)) {
      visited.add(url);

      try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const items = [];
        $('.product_pod').each((index, element) => {
          const itemUrl = $(element).find('a').attr('href');
          if (itemUrl && allowedDomains.some(domain => itemUrl.startsWith(domain))) {
            queue.push(itemUrl);
          } else {
            const title = $(element).find('h3 a').text().trim();
            const price = $(element).find('.price_color').text().trim();
            const availability = $(element).find('.availability .instock').text().trim().replace(/[\n\s]+/g, '');
            items.push({ title, price, availability });
          }
        });

        // Write parsed items to JSON file
        fs.appendFileSync('crawled_data.json', JSON.stringify(items, null, 2) + '\n');

        // Follow links to other categories
        $('.pager a').each((index, element) => {
          const link = $(element).attr('href');
          if (link && allowedDomains.some(domain => link.startsWith(domain))) {
            queue.push(link);
          }
        });
      } catch (error) {
        console.error('Error crawling:', error);
      }
    }
  }
}

crawl();
