const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const db = require('./models/db');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test DB connection
db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('MySQL connected');
});

// Use Routes
app.use('/api/items', itemRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
