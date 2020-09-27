import express from "express";
import Item from "../models/Item";

const router = express.Router();

// GET all fruits
router.get("/", async (req, res) => {
  try {
    const fruits = await Item.find({ category: "Fruit" }).select({
      name: 1,
      imageUrl: 1,
      "nutrition.calories": 1,
    });

    res.json(fruits);
  } catch (err) {
    res.json({ messag: err });
  }

  res.send("GET /");
});

// GET a single fruit
router.get("/:id", (req, res) => {
  const fruitId = req.params.id;
  const longitude = req.query.longitude;
  const latitde = req.query.latitde;

  res.send(`GET A fruit: ${fruitId}`);
});

export default router;
