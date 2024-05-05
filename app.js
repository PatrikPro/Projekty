const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/top100lists', require('./routes/top100lists'));
app.use('/api/wishlists', require('./routes/wishlists'));
app.use('/api/travelplans', require('./routes/travelplans'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
