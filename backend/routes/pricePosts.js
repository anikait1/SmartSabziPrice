import express from "express";
import PricePost from "../models/PricePost";

const router = express.Router();

// create a new PricePost Model
router.post("/", (req, res) => {
  
    const itemBill = {
    price: req.body.price,
    rating: req.body.rating,
    quantity: req.body.quantity,
    quantityType: req.body.quantityType,
  };
  const votes = req.body.votes;
  const location = req.body.location;

  const author = {
    id: req.user._id,
    username: req.user.username,
  };

  const newPost = new PricePost({
    itemBill,
    votes,
    location,
    author,
  });

  newPost.save()
    .then(() => res.json("New Post Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
