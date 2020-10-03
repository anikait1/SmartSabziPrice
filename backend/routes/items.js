import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

router.post("/fruits", (req, res) => {
  Item.create({ ...req.body.item }, (err, item) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      res.status(201).send("Created");
    }
  });
});

router.get("/fruits", (req, res) => {
  Item.find({ category: "Fruit" })
    .select({
      name: 1,
      displayImgUrl: 1,
      "nutrition.calories": 1,
    })
    .then((items) => res.json(items))
    .catch((err) => res.json({ message: err }));
});

router.get("/fruits/:id", (req, res) => {
  Item.findById(req.params.id)
    .populate({
      path: "pricePosts",
      "location.position": {
        $near: {
          $maxDistance: 1000,
          $geometry: {
            type: "Point",
            coordinate: [req.query.longitude, req.query.latitude],
          },
        },
      },
    })
    .then((item) => res.json(item))
    .catch((err) => res.json({ message: err }));
});

router.get("/vegetables", (req, res) => {});

router.get("/vegetables/:id", (req, res) => {});

export default router;
