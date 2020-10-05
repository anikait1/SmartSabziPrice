import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", (req, res) => {
  User.create({ ...req.body.user })
    .then(() => res.status(201).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
});

export default router;
