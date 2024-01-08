const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
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
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
