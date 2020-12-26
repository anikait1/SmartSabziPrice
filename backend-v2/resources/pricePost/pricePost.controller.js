const PricePost = require("./pricePost.model");
const User = require("../user/user.model");
const Item = require("../item/item.model");

// Get price-posts for specified item
exports.getItemPricePosts = async (req, res) => {
  // parse latitude, longitude and distance from query object
  const latitude = parseFloat(req.query.latitude);
  const longitude = parseFloat(req.query.longitude);
  const distance = parseInt(req.query.distance) ?? 3000;

  // validate query parameters
  if (latitude === NaN || longitude === NaN || distance || NaN) {
    res.status(400).json({ error: "Invalid query" });
  }

  try {
    const pricePosts = await PricePost.find({ itemID: req.params.id })
      .where("position")
      .near({
        center: { type: "Point", coordinates: [longitude, latitude] },
        maxDistance: distance,
      })
      .populate({ path: "userID", select: { firstName: 1, lastName: 1 } })
      .exec();

    res.status(200).send(pricePosts);
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

// Create a new price-post
exports.createPricePost = async (req, res) => {
  try {
    const isUser = await User.exists({ _id: req.body.userID });
    const isItem = await Item.exists({ _id: req.params.id });

    // validate the user and item
    if (isUser === false || isItem === false) {
      res.status(404).json({ error: "Item or User not found" });
    } else {
      const pricePost = new PricePost({ ...req.body });
      pricePost.itemID = req.params.id;

      await pricePost.save();
      res.status(201).json(pricePost);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Bad Request" });
  }
};

// Add a like to an existing price-post
exports.addLike = async (req, res) => {
  try {
    const pricePostID = req.params.pricePostID;
    const userID = req.body.userID;

    const pricePost = await PricePost.findById(pricePostID);
    const user = await User.findById(userID);

    if (pricePost === null) {
      res.status(404).send("Price Post Not Found");
    } else if (user === null) {
      res.status(404).send("User Not Found");
    } else {
      pricePost.likes.push(userID);
      user.likedPosts.push(pricePostID);

      await pricePost.save();
      await user.save();

      res.status(201).json(pricePost);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.removeLike = async (req, res) => {
  try {
    const pricePostID = req.params.pricePostID;
    const userID = req.body.userID;

    const pricePost = await PricePost.findById(pricePostID);
    const user = await User.findById(userID);

    if (pricePost === null) {
      res.status(404).send("Price Post Not Found");
    } else if (pricePost === null) {
      res.status(404).send("User Not Found");
    } else {
      pricePost.likes.pull(userID);
      user.likedPosts.pull(pricePostID);

      await pricePost.save();
      await user.save();

      res.status(201).json({ "price-post": pricePost, user: user });
    }
  } catch (err) {
    res.send(err);
  }
};
