import express from "express";

const router = express.Router();

// GET all vegetables
router.get("/", (req, res) => {
  // using query parameterss
  const name = req.query.name;
  const age = req.query.age;

  res.send(`GET ALL vegetables Q: ${name}, ${age}`);
});

// GET a single vegetable
router.get("/:id", (req, res) => {
  const vegetableId = req.params.id;

  res.send(`GET A vegetable: ${vegetableId}`);
});

export default router;
