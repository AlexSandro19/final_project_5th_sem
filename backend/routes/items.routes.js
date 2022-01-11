const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const Furniture = require("../model/Furniture");
const User = require("../model/User")
require("dotenv").config();

//const allItems = require("../data_for_tests/furniture.json"); 

const router = Router();


// GET /api/items
router.get("/items",
    async (req, res) => {
      try {
        const allItems = await Furniture.find({});
        if (allItems.length === 0) {
          return res.status(404).json({ message: "No data available" });
        }
    
        return res.status(200).json(allItems);
        
      } catch(error) {
          return res.status(404).json({ message: error });
      }

    }
 );

router.post("/updateItem",
    async (req, res) => {
      try {

        const updatedItem = req.body;
        const savedItem = await  Furniture.findByIdAndUpdate(updatedItem._id, updatedItem,  { new: true }); 
        return res.status(200).json(savedItem);
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
          return res.status(404).json({ message: error });

      }

    }
); 
 


module.exports = router;