const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const Furniture = require("../model/Furniture");
const User = require("../model/User")
require("dotenv").config();

const router = Router();


// GET /api/items
router.get("/items",
    async (req, res) => {
      try {
        console.log("api/items is called");
        const allItems = await User.findOne({email: "admin123@admin.com"});
        console.log(allItems);
        if (allItems.length === 0) {
          return res.status(404).json({ message: "No data available" });
        }
        return res.status(200).json({ data: allItems });
      } catch(error) {
          return res.status(404).json({ message: error });
      }

    }
 );
 


module.exports = router;