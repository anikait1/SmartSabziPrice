import express from "express";
import {
  createPost,
  getUserPosts,
  getItemPosts,
} from "../controllers/pricePosts.js";

const router = express.Router();

router.post("/", createPost);

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", getUserPosts);

// get all posts for a specific item
router.get("/items/:itemId", getItemPosts);

router.get("/", (req, res) => {
  PricePost.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
