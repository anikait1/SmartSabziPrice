const Item = require("./item.model");
const {
  errorCodes,
  createResponse,
  responseStatus,
} = require("../../utils/controllerResponse");

// Get fruits
exports.getFruits = async (_req, res) => {
  try {
    const fruits = await Item.find({ category: "Fruit" })
      .sort({ name: -1 })
      .select({ name: 1, category: 1, "nutrition.calories": 1 })
      .exec();

    const response = createResponse(responseStatus.SUCCESS, null, fruits);
    res.status(200).json(response);
  } catch (err) {
    const response = createResponse(
      responseStatus.FAIL,
      errorCodes.SERVER_ERROR,
      null
    );

    res.status(500).json(response);
  }
};

// Get vegetables
exports.getVegetables = async (_req, res) => {
  try {
    const vegetables = await Item.find({ category: "Vegetable" })
      .sort({ name: -1 })
      .select({ name: 1, category: 1, "nutrition.calories": 1 })
      .exec();

    const response = createResponse(responseStatus.SUCCESS, null, vegetables);
    res.status(200).json(response);
  } catch (err) {
    const response = createResponse(
      responseStatus.FAIL,
      errorCodes.SERVER_ERROR,
      null
    );

    res.status(500).json(response);
  }
};

// Get item specified by ID
exports.getItemById = async (req, res) => {
  try {
    const itemID = req.params.id;
    const item = await Item.findById(itemID).exec();

    if (item === null) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.ITEM_NOT_FOUND,
        null
      );
      res.status(404).json(response);
    } else {
      const response = createResponse(responseStatus.SUCCESS, null, item);
      res.status(200).json(response);
    }
  } catch (err) {
    const response = createResponse(
      responseStatus.FAIL,
      errorCodes.SERVER_ERROR,
      null
    );
    res.status(500).json(response);
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
