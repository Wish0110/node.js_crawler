const express = require('express');
const fs = require('fs');
const app = express();

// Endpoint to serve crawled data
app.get('/crawled_data', async (req, res) => {
  try {
    const data = await fs.promises.readFile('crawled_data.json', 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(6000, () => {
  console.log('Server listening on port 6000');
});
