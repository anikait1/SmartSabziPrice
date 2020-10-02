import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

router.post("/fruits", (req, res) => {
  const item = new Item({ ...req.body.item });

  item
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.get("/fruits", (req, res) => {
  findItems("Fruit")
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.get("/fruits/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.get("/vegetables", (req, res) => {});

router.get("/vegetables/:id", (req, res) => {});

const findItems = (category) => {
  const items = Item.find({ category: category }).select({
    name: 1,
    displayImgUrl: 1,
    "nutrition.calories": 1,
  });

  return items;
};

const findItemById = (itemId, longitude, latitude) => {
  /*
  posts.find({
    "location.position": {
      $near: {
        $maxDistance: 1000,
        $geometry: { type: "Point", coordinate: [longitude, latitude] },
      },
    },
  });
  */
};

export default router;
