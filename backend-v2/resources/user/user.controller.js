const User = require("./user.model");
const PricePost = require("../pricePost/pricePost.model");

exports.createUser = async (req, res) => {
  try {
    const user = new User({ ...req.body });
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find({}).exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUserPricePosts = async (req, res) => {
  try {
    const pricePosts = await PricePost.find({ userID: req.params.id });
    res.status(200).json(pricePosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getLikedPosts = async (req, res) => {
  try {
    const userID = req.params.id;
    const user = await User.findById(userID).populate("likedPosts").exec();

    res.status(200).json(user.likedPosts);
  } catch (err) {
    res.status(500).send(err);
  }
};
