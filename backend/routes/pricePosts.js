import express from "express";
import PricePost from "../models/PricePost";

const router = express.Router();

// create a new PricePost Model
router.post("/vegetables/:id", (req, res) => {
  Item.findById(req.params.id, (err, itemfound) => {
    if (err) {
      console.log(err);
    } else {
      PricePost.create(req.body.PricePost, (err, newpricepost) => {
        if (err) {
          console.log(err);
        } else {
          const itemBill = {
            price: req.body.price,
            rating: req.body.rating,
            quantity: req.body.quantity,
            quantityType: req.body.quantityType,
          };
          const votes = req.body.votes;

          // TO be modified acc. to current location
          const location = {
            lattitude: req.body.lattitude,
            longitude: req.body.longitude,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,
          };
          const author = {
            id: req.user._id,
            username: req.user.username,
          };

          newpricepost = new PricePost({
            itemBill,
            votes,
            location,
            author,
          });

          itemfound.priceposts.push(newpricepost);

          newpricepost.save()
            .then(() => res.json("New Post Added"))
            .catch((err) => res.status(400).json("Error" + err));
        }
      });
    }
  });
});

router.post("/fruits/:id", (req, res) => {
  Item.findById(req.params.id, (err, itemfound) => {
    if (err) {
      console.log(err);
    } else {
      PricePost.create(req.body.PricePost, (err, newpricepost) => {
        if (err) {
          console.log(err);
        } else {
          const itemBill = {
            price: req.body.price,
            rating: req.body.rating,
            quantity: req.body.quantity,
            quantityType: req.body.quantityType,
          };
          const votes = req.body.votes;

          //TO be modified acc. to current location
          const location = {
            lattitude: req.body.lattitude,
            longitude: req.body.longitude,
            pincode: req.body.pincode,
            city: req.body.city,
            state: req.body.state,
          };

          const author = {
            id: req.user._id,
            username: req.user.username,
          };

          newpricepost = new PricePost({
            itemBill,
            votes,
            location,
            author,
          });

          itemfound.priceposts.push(newpricepost);

          newpricepost.save()
            .then(() => res.json("New Post Added"))
            .catch((err) => res.status(400).json("Error" + err));
        }
      });
    }
  });
});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
