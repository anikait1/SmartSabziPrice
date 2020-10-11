import PricePost from "../models/PricePost.js";

export const createPost = (req, res) => {
  PricePost.create({ ...req.body.pricePost })
    .then(() => res.status(201).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
};

export const getUserPosts = (req, res) => {
  PricePost.find({ userId: req.params.userId }).then(
    PricePost.aggregate(
      [
        {
          $group: {
            // group by itemid or item
            _id: "$itemId",
            postsByUser: {
              $push: "$$ROOT",
            },
          },
        },
      ],
      function (err, result) {
        if (err) {
          console.log(err);
          res.json({ message: err });
        } else {
          console.log(result);
          res.json(result);
        }
      }
    )
  );
};

export const getItemPosts = (req, res) => {
  const longitude = req.query.longitude;
  const latitude = req.query.latitude;
  const filter = {
    itemId: req.params.itemId,
    "location.position": {
      $near: {
        $maxDistance: 500,
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      },
    },
  };

  PricePost.find(filter)
    .populate("userId")
    .then((posts) => res.status(200).json(posts))
    .catch((err) => res.status(400).json({ message: err }));
};
