const PricePost = require("./pricePost.model");
const User = require("../user/user.model");
const Item = require("../item/item.model");
const {
  errorCodes,
  createResponse,
  responseStatus,
} = require("../../utils/controllerResponse");

// Get price-posts for specified item
exports.getItemPricePosts = async (req, res) => {
  try {
    // parse latitude, longitude and distance from query object
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const distance = req.query.distance ?? 3000000;

    // validate the query parameters
    if (latitude === NaN || longitude === NaN || typeof distance !== 'number') {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.INVALID_PARAMETERS,
        null
      );
      console.log( typeof latitude)
      res.status(400).json(response);
    } else {
      const pricePosts = await PricePost.find({ itemID: req.params.id })
        .where("position")
        .near({
          center: { type: "Point", coordinates: [longitude, latitude] },
          maxDistance: distance,
        })
        .populate({ path: "userID", select: { firstName: 1, lastName: 1 } })
        .exec();

      const response = createResponse(responseStatus.SUCCESS, null, pricePosts);
      res.status(200).send(response);
    }
  } catch (err) {
    const response = createResponse(
      responseStatus.FAIL,
      errorCodes.SERVER_ERROR,
      null
    );

    res.status(500).send(response);
    console.log(err);
  }
};

// TO-DO
// Create a new price-post
exports.createPricePost = async (req, res) => {
  try {
    const isUser = await User.exists({ _id: req.body.userID }); 
    const isItem = await Item.exists({ _id: req.params.id });

    // validate the user and item
    if (isUser === false) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.USER_NOT_FOUND,
        null
      );
      res.status(404).json(response);
    } else if (isItem === false) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.ITEM_NOT_FOUND,
        null
      );
      res.status(404).json(response);
    } else {
      const pricePost = new PricePost({ ...req.body });
      pricePost.itemID = req.params.id;

      await pricePost.save();
      const response = createResponse(responseStatus.SUCCESS, null, pricePost);
      res.status(201).json(response);
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

// Add a like to an existing price-post
exports.addLike = async (req, res) => {
  try {
    const pricePostID = req.params.pricePostID;
    const userID = req.body.userID;

    const pricePost = await PricePost.findById(pricePostID);
    const user = await User.findById(userID);

    // validate price-post and user
    if (pricePost === null) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.PRICE_POST_NOT_FOUND,
        null
      );

      res.status(404).json(response);
    } else if (user === null) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.USER_NOT_FOUND,
        null
      );

      res.status(404).json(response);
    } else {
      pricePost.likes.push(userID);
      user.likedPosts.push(pricePostID);

      await pricePost.save();
      await user.save();

      const response = createResponse(responseStatus.SUCCESS, null, pricePost);
      res.status(201).json(response);
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

// Remove a like from an existing price-post
exports.removeLike = async (req, res) => {
  try {
    const pricePostID = req.params.pricePostID;
    const userID = req.body.userID;

    const pricePost = await PricePost.findById(pricePostID);
    const user = await User.findById(userID);

    // validate price-post and user
    if (pricePost === null) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.PRICE_POST_NOT_FOUND,
        null
      );

      res.status(404).json(response);
    } else if (pricePost === null) {
      const response = createResponse(
        responseStatus.FAIL,
        errorCodes.USER_NOT_FOUND,
        null
      );

      res.status(404).json(response);
    } else {
      pricePost.likes.pull(userID);
      user.likedPosts.pull(pricePostID);

      await pricePost.save();
      await user.save();

      const response = createResponse(responseStatus.SUCCESS, null, pricePost);
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
