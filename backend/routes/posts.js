import express from "express";

const router = express.Router();

// GET all posts of a user
router.get("/:userId", (req, res) => {
  res.send(`For userId: ${req.params.userId} sending all PricePosts`);
});

// GET posts based on an item ID
router.get("/:itemId", (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  res.send(`Item ID: ${itemId}, Latitude: ${latitude}, Longitude: ${longitude}`);
});

// GET posts for all fruits
router.get("/fruits", (req, res) => {
  // discuss alternate for price display
});

// GET posts for all vegetables
router.get("/fruits", (req, res) => {
  // discuss alternate for price display
});
export default router;