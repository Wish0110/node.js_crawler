const express = require('express');
const app = express();
const crawledDataRouter = require('./routes'); // Adjust the path if needed

// ... other middleware and configuration

app.use('/api', crawledDataRouter); // Mount the routes under a specific path

