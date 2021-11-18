const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../model/User");
const auth = require("../middleware/auth.middleware");

require("dotenv").config();

const router = Router();

router.post("/contact", 
[check("email", "Enter valid email").normalizeEmail().isEmail()],

    async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid authorization data",
        });
      }

      const { name, email, subject, message } = req.body;
     
      
        
        emailjs.sendForm(process.env.SERVICE_NAME, 'template_yesofn7', e.target, 'user_JRQFq2IyPmOHEaFKZB6Ta')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        
      res.status(200).json({ message: "successfully emailed me "});
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }


)

module.exports = router;