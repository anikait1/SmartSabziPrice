import express from "express";
import Item from "../models/Item";
import PricePost from "../models/PricePost";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  // approach 1
  const pricePost = new PricePost({ ...req.body.pricePost });

  Item.findById(req.body.itemId)
    .then((item) => item.priceposts.push())
    .catch((err) => res.json({ message: err }));

  User.findById(req.body.userId)
    .then((user) => user.postsbyUser.push(pricePost))
    .catch((err) => res.json({ message: err }));

  pricePost
    .save()
    .then(() => res.json({ message: "new post added" }))
    .catch((err) => res.json({ message: err }));

  // approach 2
  PricePost.create({ ...req.body.pricePost }, (err, pricePost) => {
    if (err) {
      res.json({ message: err });
    } else {
      Item.findById(req.body.itemId, (err, item) => {
        if (err) {
          res.json({ message: err });
        } else {
        }
      });
    }
  });
});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {
  try {
    const postfound = User.findById(req.params.userId);

    res.json(postfound);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
