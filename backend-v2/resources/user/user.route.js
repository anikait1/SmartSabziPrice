const express = require("express");
const userController = require("./user.controller");

const router = express.Router()

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id/price-posts", userController.getUserPricePosts);
router.get("/:id/liked-posts", userController.getLikedPosts);

module.exports = router;