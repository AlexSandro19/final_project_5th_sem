const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      hasWarranty: {
        type: Boolean,
        required: true,
      },
      isPopular:{
        type:Boolean,
        required:true  
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      stock:{
          type:Boolean,
          required:true,
      },
      description:{
          type:String,
          required:true,
      },
      categories:[
        {
          type:String,
          required:true,
        }
      ],
      materials:[
         { 
            type:String,
            required:true,
          }
      ]
  
    },
    {
      timestamps: true,
    }
  );
module.exports = model("Furniture", schema);