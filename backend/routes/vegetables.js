import express from "express";
import Item from "../models/Item";

const router = express.Router();

// GET all vegetables
router.get("/", async (req, res) => {
  try {
    const vegetables = await Item.find({ category: "Vegetable" }).select({
      name: 1,
      imageUrl: 1,
      "nutrition.calories": 1,
    });

    res.json(vegetables);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET a single vegetable
router.get("/:id", (req, res) => {
  const vegetableId = req.params.id;
  const longitude = req.query.longitude;
  const latitde = req.query.latitde;

  res.send(`GET A vegetable: ${vegetableId}`);
});

export default router;
