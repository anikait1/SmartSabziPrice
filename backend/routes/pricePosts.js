import express from "express";

const router = express.Router();

// create a new PricePost Model
router.post("/", (req, res) => {});

// update vote count for a PricePost
router.patch("/:postId", (req, res) => {});

// get all posts for a specific user
router.get("/users/:userId", (req, res) => {});

export default router;

// username: dbAdmin
// password: lkYXgjB4kemszZU2
