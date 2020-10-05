import express from "express";
import PricePost from "../models/PricePost.js";

const router = express.Router();

router.post("/", (req, res) => {
  PricePost.create({ ...req.body.pricePost })
    .then(() => res.status(200).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {
  PricePost.find({ userId: req.params.userId })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json({ message: err }));
});

// get all posts for a specific item
router.get("/items/:itemId", (req, res) => {
  
  const longitude = req.query.longitude;
  const latitude = req.query.latitude;

 PricePost.find({
    location : {
      $near : {
        $maxDistance : 10000,
        $geometry : {
          type : "Point",
          coordianates : [longitude, latitude]
        }
      }
    }
  }).find((err,result) => {
    if(err){
      res.json({message : err});
    console.log(err);
    }else{
      console.log(JSON.stringify(result,0,2));
       res.json(result);
    }
  });

  // PricePost.aggregate([
  //   {
  //     $geoNear: {
  //       near: {
  //         type: "Point",
  //         coordianates: [longitude, latitude],
  //       },
  //       maxDistance: 1000,
  //       distanceField: "location.position",
  //     },
  //   },
  // ])
  //   .then((posts) => res.json(posts))
  //   .catch((err) => res.json({ message: err }));
});

router.get("/", (req, res) => {
  PricePost.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
