const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const Furniture = require("../model/Furniture");
const User = require("../model/User");
const Order = require("../model/Order")
require("dotenv").config();

//const allItems = require("../data_for_tests/furniture.json"); 

const router = Router();


// GET /api/items
router.get("/items",
    async (req, res) => {
      try {
        console.log("api/items is called");
        const allItems = await Furniture.find({});
        console.log(allItems);
        // console.log(allItems[0]); -- to access a specifc element in the array
        if (allItems.length === 0) {
          return res.status(404).json({ message: "No data available" });
        }
    
        return res.status(200).json(allItems);
        
      } catch(error) {
          return res.status(404).json({ message: error });
      }

    }
 );

router.post("/saveCart",
    async (req, res) => {
      try {
        console.log("api/saveCart is called");
        // const {user, cart} = req.body
        const {user, cart} = req.body;
        await User.findByIdAndUpdate(user.id, {...user, cart},  { new: true });
        return res.status(200).json({didUserUpdate: true});
        // if (Object.keys(savedItem).length !== 0){
        //   console.log("item updated successfully");
        //   return res.status(200).json(savedItem);
        // }else {
        //   console.log("item didnt update");
        // }
        // if (items.length === 0) {
        //   return res.status(404).json({ message: "No data available" });
        // }
        // console.log(items);
        // return res.status(200).json(items);
        
      } catch(error) {
        console.log(error.message);
          return res.status(404).json({ didUserUpdate: false, message: error });

      }

    }
); 
 


module.exports = router;