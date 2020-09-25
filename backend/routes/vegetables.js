import express from "express";

const router = express.Router();

// GET all vegetables
router.get("/", (req, res) => {
  res.send("GET ALL from vegetables route");
});

// GET a single vegetable
// find a way to limit id to numbers only
router.get("/:id", (req, res) => {
  res.send("GET A vegetable from vegetable route")
});

export default router;