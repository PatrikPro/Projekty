const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  topasset: String,
  score: Number,
  position: String
});

module.exports = mongoose.model('Destination', DestinationSchema);
