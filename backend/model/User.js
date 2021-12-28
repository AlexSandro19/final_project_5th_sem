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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
        itemObject:{ 
          type:Types.ObjectId,
          ref:"Furniture"
        }, 
        itemName:{ 
          type:String,
        }, 
        itemPrice:{
          type: Number,
          //required: true,
        }, 
        quantityInCart:{
          type: Number,
          //required: true,
        }, 
        totalPerItem:{
          type: Number,
          //required: true,
        }
      }
    ]

  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
