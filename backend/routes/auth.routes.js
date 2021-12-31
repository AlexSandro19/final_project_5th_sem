const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../model/User");
const Order = require("../model/Order");
const Furniture = require("../model/Furniture");
const auth = require("../middleware/auth.middleware");
//const { grantAccess } = require("../middleware/authorization.middleware");

require("dotenv").config();

const router = Router();
//POST /api/auth/message
router.post("/message",async(req,res)=>{

  return res.status(201).json({ message: "User account created" });
})
// POST /api/auth/register
 router.post(
   "/register",
   [
    check("email","Enter valid email").normalizeEmail().isEmail(),
    check("password","Enter a valid password").exists(),
    check("firstName","Enter a valid first name").exists().notEmpty(),
    check("lastName","Enter a valid last name").exists().notEmpty(),
    check("username","Enter a valid username").exists().notEmpty(),
    check("phone","Enter a valid phone").exists().notEmpty(),
    check("address","Enter a valid address").exists().notEmpty(),
   ],
   async (req, res) => {
     try {
       const errors = validationResult(req);

       if (!errors.isEmpty()) {
         return res.status(400).json({
           errors: errors.array(),
           message: "Invalid data while registering",
         });
      }

      const {firstName,lastName,username,address,phone,email, password } = req.body;
      const role="USER";
      const emailConfirmed=false;
      const orders=[];
      const cart=[];
      const candidate = await User.findOne({ email });

    if (candidate) {
         return res
           .status(400)
           .json({ message: "User with this email already exists" });
       }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword,role,firstName,lastName,username,address,phone,cart,orders,emailConfirmed });

      await user.save();

       return res.status(201).json({ message: "User account created" });
     } catch (error) {
       return res.status(500).json({ message: "Something went wrong",error:error.message });
     }
}
);

// POST /api/auth/login
router.post(
  "/login",
  [
    check("email", "Enter valid email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid authorization data",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email }).select(" password email orders cart  username phone address firstName lastName role").populate({path:"orders",populate:{path:"items"}}).exec();
      console.log(user.populated("items"));
      if (!user) {
        return res.status(400).json({
          message: "Invalid authorization data",
          errors: [{ value: email, msg: "User not found", param: "email" }],
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid authorization data",
          errors: [
            { value: "", msg: "Wrong password, try again", param: "password" },
          ],
        });
      }
      // user.dashboard.map((item)=>{
      //   console.log(item)
      // })
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token,exp: token.exp, userId: user.id, role: user.role,email:user.email,emailConfirmed:user.emailConfirmed,username:user.username,firstName:user.firstName,lastName:user.lastName,cart:user.cart,phone:user.phone,address:user.address,orders:user.orders});
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

router.post("/refreshUser",async(req,res)=>{

  try{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid authorization data",
      });
    }
    const {email,userId} = req.body;
    console.log(userId);
    console.log(email);
    const user= await User.findById(userId).select(" password email orders cart  username phone address name role").populate({path:"orders",populate:{path:"items"}}).exec();
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token,exp: token.exp, userId: user.id, role: user.role,email:user.email,emailConfirmed:user.emailConfirmed,username:user.username,name:user.name,cart:user.cart,phone:user.phone,address:user.address,orders:user.orders});
  }catch(error){
    console.log(error);
    res.status(500).json({ message: "Something went wrong, try again" });
  }

})


module.exports = router;
