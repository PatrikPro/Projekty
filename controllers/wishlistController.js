const Wishlist = require('../models/Wishlist');

exports.getWishlistByUserId = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ userId: req.params.userId });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addToWishlist = async (req, res) => {
  const wishlist = new Wishlist(req.body);
  try {
    const newWishlist = await wishlist.save();
    res.status(201).json(newWishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateWishlist = async (req, res) => {
  try {
    const updatedWishlist = await Wishlist.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true });
    res.json(updatedWishlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOneAndDelete({ userId: req.params.userId });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
    res.json({ message: 'Wishlist deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
