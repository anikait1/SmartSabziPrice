import express from "express";
import Item from "../models/Item";
import PricePost from "../models/PricePost";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  const pricePost = new PricePost({ ...req.body.pricePost });

  Item.findById(req.body.itemId)
    .then((item) => item.priceposts.push())
    .catch((err) => res.json({ message: err }));

  User.findById(req.body.userId)
    .then((user) => user.postsByUser.push(pricePost))
    .catch((err) => res.json({ message: err }));

  pricePost
    .save()
    .then(() => res.json({ message: "new post added" }))
    .catch((err) => res.json({ message: err }));
});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {
  User.findById(req.params.userId)
    .populate("postsByUser")
    .exec((err, foundUser) => {
      if (err) {
        console.log(err);
        res.json({ message: err });
      } else {
        PricePost.aggregate([
          {
            $group: {
              _id: "$item",
              itemPosts: { $push: "$foundUser.postsByUser" },
            },
          },
        ]);
      }
      //Send Posts
      res.json();
    });
});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
