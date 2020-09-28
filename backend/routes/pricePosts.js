import express from "express";
import Item from "../models/Item";
import PricePost from "../models/PricePost";

const router = express.Router();

// create a new PricePost Model
router.post("/", (req, res) => {
  Item.findById(req.body.id, (err, itemfound) => {
    if (err) {
      console.log(err);
    } else {
      PricePost.create(req.body.PricePost, (err, newpricepost) => {
        if (err) {
          console.log(err);
        } else {
          const itemBill = req.body.itemBill;
          const votes = req.body.votes;

          // TO be modified acc. to current location
          const location = req.body.location;
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
router.get("/users/:userId", (req, res) => {

  try{
    const postfound = Item.find({"priceposts" : { "author" : { id : req.params.userId}}});
     
    res.json(postfound);
  }catch(err){
    res.json({message : err});
  }
});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
