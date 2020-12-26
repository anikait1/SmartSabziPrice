const Item = require("./item.model");

// Get fruits
exports.getFruits = async (_req, res) => {
  try {
    const fruits = await Item.find({ category: "Fruit" })
      .sort({ name: -1 })
      .select({ name: 1, category: 1, "nutrition.calories": 1 })
      .exec();

    res.status(200).json(fruits);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get vegetables
exports.getVegetables = async (_req, res) => {
  try {
    const vegetables = await Item.find({ category: "Vegetable" })
      .sort({ name: -1 })
      .select({ name: 1, category: 1, "nutrition.calories": 1 })
      .exec();

    res.status(200).json(vegetables);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get item specified by ID
exports.getItemById = async (req, res) => {
  try {
    const itemID = req.params.id;
    const item = await Item.findById(itemID).exec();

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new item (development only)
exports.createNewItem = async (req, res) => {
  try {
    const item = new Item({ ...req.body });
    await item.save();

    res.status(201).send(item);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
