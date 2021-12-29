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
        console.log("api/items is called");
        const allItems = await Furniture.find({});
        //console.log(allItems);
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
 router.post("/deleteItem",async(req,res)=>{
   try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data while sending",
      });
    }
    const deleteItem = req.body;
    //console.log(deleteItem);
    await Furniture.findByIdAndDelete(deleteItem._id);
    const allItems = await Furniture.find({});
    return res.status(200).json(allItems)
   }catch(error){
    console.log(error.message);
    return res.status(404).json({ message: error });
   }
 })
router.post("/createItem",async(req,res)=>{
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data while sending",
      });
    }
    const item = req.body;
    console.log("SDASD00");
    console.log(item);
    await Furniture.create(item);
    return res.status(200).json({message:"Successfully created a new Item"});
  }catch(error){
    console.log(error.message);
    return res.status(404).json({ message: error });
  }
})
router.post("/updateItem",
    async (req, res) => {
      try {
        console.log("api/updateItem is called");

        const updatedItem = req.body;
        console.log("updated item: ", updatedItem);
        const savedItem = await  Furniture.findByIdAndUpdate(updatedItem._id, updatedItem,  { new: true }); 
        console.log("saved item: ", savedItem);
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