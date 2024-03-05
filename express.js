const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Mount your API routes under the /api path
app.use('/api', routes);

// Define a default route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the CRUD application!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});