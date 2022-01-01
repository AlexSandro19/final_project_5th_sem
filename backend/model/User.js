const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username:{
      type:String,
      required:true  
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "ADMIN"],
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    emailConfirmed:{
        type:Boolean,
        default: false
    },
    orders:[
      {
        type:Types.ObjectId,
        ref:"Order"
      }
    ],
    cart:[
       { 
        type:Types.ObjectId,
        ref:"Furniture"
        }
    ]

  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
