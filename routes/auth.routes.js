const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../model/User");
const auth = require("../middleware/auth.middleware");
//const { grantAccess } = require("../middleware/authorization.middleware");

require("dotenv").config();

const router = Router();

// POST /api/auth/users
// router.post(
//   "/users",
//   auth,
//   grantAccess("createAny", "account"),
//   [
//     check("email", "Invalid email").normalizeEmail().isEmail(),
//     check("password", "Password too short").isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);

//       if (!errors.isEmpty()) {
//         return res.status(400).json({
//           errors: errors.array(),
//           message: "Invalid data while registering",
//         });
//       }

//       const { email, password } = req.body;

//       const candidate = await User.findOne({ email });

//       if (candidate) {
//         return res
//           .status(400)
//           .json({ message: "User with this email already exists" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 12);
//       const user = new User({ email, password: hashedPassword });

//       await user.save();

//       return res.status(201).json({ message: "User account created" });
//     } catch (error) {
//       return res.status(500).json({ message: "Something went" });
//     }
//   }
// );

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

      const user = await User.findOne({ email });

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
      res.json({ token,exp: token.exp, userId: user.id, role: user.role,email:user.email,emailConfirmed:user.emailConfirmed,username:user.username,name:user.name,cart:user.cart,phone:user.phone,address:user.address});
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

module.exports = router;
