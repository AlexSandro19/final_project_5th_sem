import { takeLatest, call, put } from "redux-saga/effects";
import {GET_CURRENT_ORDER,DELETE_ORDER, GET_CURRENT_ORDER_SUCCESS,UPDATE_ORDER,SAVE_CART,CREATE_ORDER,SAVE_ORDER,GET_ALL_ORDERS} from "../constants/order";
import {LOGIN_SUCCESS,LOGIN_FAILURE} from "../constants/auth";
import {refreshUser} from "../../services/auth.service";
import {getCurrentOrderApi,getUpdateOrderApi,deleteOrderService,saveCartService,createOrderService,getAllOrders} from "../../services/order.service";
import {setCurrentOrder,getAllOrdersSUCCESS,} from "../actions/order";
import {setUser,unsetUser} from "../actions/user";

import { saveCartAction, saveOrderAction } from "../actions/order";
function* getOrdersFlow(action){
  try{
    const token = action.payload;
    const orders= yield call(getAllOrders,token);
    console.log(orders);
    yield put(getAllOrdersSUCCESS(orders));
  }catch(error){
    console.log(error);
    if(error.status === 401){
      yield put(unsetUser(true));
        yield put({
         type: LOGIN_FAILURE,
         message: {
           text: "Session expired. Please login again",
          severity: "error",
         },
       });
     
    }else{
      yield put({
        type:"FAILURE",
        message:{
            text:error.message,
            severity:"error",
        },
        errors:error.errors
    })
    }
    
  }
}
function* createOrderFlow(action) {
  try {

    const order = action.payload;
    const user = action.user

    const {orderCreated,addedOrderId} = yield call(createOrderService, order)  
    if (orderCreated) {
      order._id = addedOrderId      
      user.orders.push(order)
      user.cart = []
      yield put(setUser(user.token, user.id, user.role, user.exp,user.username,user.firstName,user.lastName,user.email,user.phone,user.address,user.cart,user.emailConfirmed,user.orders));
      const lastcreatedOrderIndex = user.orders.length - 1
      const lastCreatedOrder = user.orders[lastcreatedOrderIndex]
      console.log("lastCreatedOrder in createOrderFlow ", lastCreatedOrder)
      yield put(setCurrentOrder(lastCreatedOrder));
      yield put({
        type: LOGIN_SUCCESS,
      });
      yield put({
        type:"SUCCESS",
        message:{
            text:"You have successfully created the order",
            severity:"success"
        }
    })
    } 
  //   yield put(setUser(updatedUser))

  }catch (error) {
    if(error.status === 401){
      yield put(unsetUser(true));
        yield put({
         type: LOGIN_FAILURE,
         message: {
           text: "Session expired. Please login again",
          severity: "error",
         },
       });
     
    }else{
      yield put({
        type:"FAILURE",
        message:{
            text:error.message,
            severity:"error",
        },
        errors:error.errors
    })
    }
  }
}

function* getCurrentOrderFlow(action){

    try{
        const orderId= action.payload;
        const token= action.token;
        console.log(token);
        const order = yield call(getCurrentOrderApi,orderId,token);
        // console.log(orderId);
        console.log(order);
        yield put(setCurrentOrder(order));
    }catch(error){
        console.log(error);

        if(error.status === 401){
          yield put(unsetUser(true));
            yield put({
             type: LOGIN_FAILURE,
             message: {
               text: "Session expired. Please login again",
              severity: "error",
             },
           });
         
        }else{
          yield put({
            type:"FAILURE",
            message:{
                text:error.message,
                severity:"error",
            },
            errors:error.errors
        })
        }
    
    }
}
function* updateOrderFlow(action){
    try{
        const {order} = action.payload;
        const token = action.token
        const {updatedOrder,user} = yield call(getUpdateOrderApi,order,token)
        if(user.role === "ADMIN"){
          yield put({
            type:GET_ALL_ORDERS,
            payload:token
          })
        }else {
          yield put(setUser(token.token, token.userId, token.role, token.exp,user.username,user.firstName, user.lastName,user.email,user.phone,user.address,user.cart,user.emailConfirmed,user.orders));
        }
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully updated the order",
              severity:"success"
          }
      })
    }catch(error){
      if(error.status === 401){
        yield put(unsetUser(true));
          yield put({
           type: LOGIN_FAILURE,
           message: {
             text: "Session expired. Please login again",
            severity: "error",
           },
         });
       
      }else{
        yield put({
          type:"FAILURE",
          message:{
              text:error.message,
              severity:"error",
          },
          errors:error.errors
      })
      }
    }
}
function* deleteOrderFlow(action){
    try{
        const deleteOrder= action.payload;
        yield call(deleteOrderService,deleteOrder);
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully deleted the order",
              severity:"success"
          }
      })
    }catch(error){
        console.log(error);
        if(error.status === 401){
          yield put(unsetUser(true));
            yield put({
             type: LOGIN_FAILURE,
             message: {
               text: "Session expired. Please login again",
              severity: "error",
             },
           });
         
        }else{
          yield put({
            type:"FAILURE",
            message:{
                text:error.message,
                severity:"error",
            },
            errors:error.errors
        })
        }
    }
}


function* saveCartFlow(action) {
    try {
      console.log("action in saveCartFlow ", action)
      const user = action.user;
      const cart = action.payload;
      const activityType = action.activityType;
      const {didUserUpdate} = yield call(saveCartService, user, cart)  
      
      if (didUserUpdate) {
        user.cart = [...cart]
        console.log("User after upfate in saveCartFlow", user)
        yield put(setUser(user.token, user.id, user.role, user.exp,user.username,user.firstName,user.lastName, user.email,user.phone,user.address,user.cart,user.emailConfirmed,user.orders));
        yield put({
          type: LOGIN_SUCCESS,
        });

      } 
      if(activityType === "ADD"){
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully added an item to the cart",
              severity:"success"
          }
      })
      }else if (activityType === "REMOVE"){
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully removed an item from the cart",
              severity:"success"
          }
      })
      }
  
    //   yield put(setUser(updatedUser))

    }catch (error) {
      if(error.status === 401){
        yield put(unsetUser(true));
         
       
      }else{
        yield put({
          type:"FAILURE",
          message:{
              text:error.message,
              severity:"error",
          },
          errors:error.errors
      })
      }
    }
}

function* orderWatcher(){
    yield takeLatest(GET_CURRENT_ORDER,getCurrentOrderFlow);
    yield takeLatest(UPDATE_ORDER,updateOrderFlow);
    yield takeLatest(DELETE_ORDER,deleteOrderFlow);
    yield takeLatest(SAVE_CART, saveCartFlow); 
    yield takeLatest(CREATE_ORDER, createOrderFlow); 
    yield takeLatest(GET_ALL_ORDERS,getOrdersFlow)
}

export default orderWatcher;
