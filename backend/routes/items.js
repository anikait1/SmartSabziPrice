import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

// development only
router.post("/", (req, res) => {
  Item.create({ ...req.body.item })
    .then(() => res.status(201).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
});

router.get("/fruits", (req, res) => {
  Item.find({ category: "Fruit" })
    .select({
      name: 1,
      displayImgUrl: 1,
      "nutrition.calories": 1,
    })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json({ message: err }));
});

router.get("/fruits/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.json({ message: err }));
});

router.get("/vegetables", (req, res) => {});

router.get("/vegetables/:id", (req, res) => {});

export default router;
