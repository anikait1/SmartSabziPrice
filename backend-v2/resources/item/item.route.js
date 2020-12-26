const express = require("express");

const itemController = require("./item.controller");
const pricePostController = require("../pricePost/pricePost.controller");

const router = express.Router();

// GET items
router.get("/fruits", itemController.getFruits);
router.get("/vegetables", itemController.getVegetables);
router.get("/:id", itemController.getItemById);

// GET and POST price-posts
router.get("/:id/price-posts", pricePostController.getItemPricePosts);
router.post("/:id/price-posts", pricePostController.createPricePost);

// POST and DELETE likes for price-posts
router.post("/:id/price-posts/:pricePostID/likes", pricePostController.addLike);
router.delete("/:id/price-posts/:pricePostID/likes", pricePostController.removeLike);

// development only
router.post("/", itemController.createNewItem);

module.exports = router;
