const { Router } = require("express");

const { check, validationResult } = require("express-validator");
const Furniture = require("../model/Furniture");
const User = require("../model/User")
const Order= require("../model/Order");
require("dotenv").config();



const router = Router();
router.post("/updateOrder",async(req,res)=>{
  try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Invalid data while sending",
      });
     
   }
   const {order} = req.body
   const updatedOrder = await Order.findByIdAndUpdate(order._id,order,{new:true});
   //console.log(updatedOrder);
   return res.status(200).json(updatedOrder);
  }catch(error){
    console.log(error.message);
    return res.status(500).json({error:error,message:error.message})

  }
})

router.post("/order",async(req,res)=>{

    try{
      const errors=  validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data while sending",
        });
     }

     const {orderId}=req.body;
     //console.log(orderId);
     const order = await Order.findOne({_id:orderId}).populate("items");
     //console.log(order);
     if(!order){
         return res.status(400).json({message:"Order not found"})
     }
     return res.status(200).json(order);
    }catch(error){

        console.log(error.message);
        return res.status(500).json({error:error,message:error.message})
    }

})


router.post("/saveCart",
    async (req, res) => {
      try {
        console.log("api/saveCart is called");
        // const {user, cart} = req.body
        const {user, cart} = req.body;
        console.log("/saveCart req.body ", req.body)
        const userToUpdate = await User.findById(user.id)
        userToUpdate.cart = [...cart]
        await userToUpdate.save();
        return res.status(200).json({didUserUpdate: true});
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
          return res.status(404).json({ didUserUpdate: false, message: error });

      }

    }
); 
 

module.exports = router;