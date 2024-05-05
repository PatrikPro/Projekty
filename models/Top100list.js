const mongoose = require('mongoose');

const Top100listSchema = new mongoose.Schema({
  year: { type: Number, default: new Date().getFullYear() },
  destinationlist: [{
    destinationId: String,
    name: String,
    location: String,
    topasset: String,
    score: Number,
    position: Number
  }]
});

module.exports = mongoose.model('Top100list', Top100listSchema);
