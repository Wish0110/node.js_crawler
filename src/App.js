// app.js
const express = require('express');
const app = express();
const crawledDataRouter = require('./routes'); // Assuming routes are in routes.js

// Middleware for parsing JSON request bodies
app.use(express.json());

// Other middleware or configurations you might need
// ...

// Mount the routes under the '/api' path
app.use('/api', crawledDataRouter);

// Start the server (replace port 3000 with your desired port)
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
