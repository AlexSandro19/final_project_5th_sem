const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../model/User");
const auth = require("../middleware/auth.middleware");

require("dotenv").config();

const router = Router();



module.exports = router;