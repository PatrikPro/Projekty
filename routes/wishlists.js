const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/:userId', wishlistController.getWishlistByUserId);
router.post('/', wishlistController.addToWishlist);
router.put('/:userId', wishlistController.updateWishlist);
router.delete('/:userId', wishlistController.deleteWishlist);

module.exports = router;
