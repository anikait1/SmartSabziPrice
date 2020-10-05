import express from "express";
import Item from "../models/Item.js";
import { getDisplayItems, getItemById } from "../controllers/items.js";

const router = express.Router();

// development only
router.post("/", (req, res) => {
  Item.create({ ...req.body.item })
    .then(() => res.status(201).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
});

router.get("/", getDisplayItems);

router.get("/:id", getItemById);

export default router;
