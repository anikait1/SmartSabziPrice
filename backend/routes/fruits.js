import express from "express";

const router = express.Router();

// GET all fruits
router.get("/", (req, res) => {
  // using query parameterss
  const name = req.query.name;
  const age = req.query.age;

  res.send(`GET ALL from fruits route for ${name}, who is aged ${age} years old`);
});

// GET a single fruit
// find a way to limit id to numbers only
router.get("/:id", (req, res) => {
  res.send("GET A fruit from vegetable route");
});

export default router;