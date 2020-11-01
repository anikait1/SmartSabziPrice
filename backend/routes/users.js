import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", (req, res) => {
  User.create({ ...req.body.user })
    .then(() => res.status(201).send("Created"))
    .catch((err) => res.status(400).json({ message: err }));
});

//for develpoment pupose only
router.get("/", (req, res) => {
  
    User.find({})
    .then((user) => res.json(user))
    .catch((err) => res.json({message : err}));
});

//For development pupose Only
router.delete("/:id",(req,res) => {

  User.findByIdAndRemove(req.params.id,function(err){
    if(err){
      console.log(err);
    }else{
      res.json({message : "User deleted"});
    }
  })

});


export default router;
