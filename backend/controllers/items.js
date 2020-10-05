import Item from "../models/Item.js";

export const getDisplayItems = (req, res) => {
  Item.find({ category: req.query.category })
    .select({
      name: 1,
      displayImgUrl: 1,
      "nutrition.calories": 1,
    })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json({ message: err }));
};

export const getItemById = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(400).json({ message: err }));
};
