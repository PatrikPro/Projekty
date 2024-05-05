const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  userId: String,
  destinations: [{
    destinationId: String,
    name: String,
    location: String,
    comment: String
  }]
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
