import express from "express";

const router = express.Router();

// GET all fruits
router.get("/", (req, res) => {
  // using query parameterss
  const name = req.query.name;
  const age = req.query.age;

  res.send(`GET ALL fruits Q: ${name}, ${age}`);
});

// GET a single fruit
router.get("/:id", (req, res) => {
  const fruitId = req.params.id;

  res.send(`GET A fruit: ${fruitId}`);
});

export default router;
