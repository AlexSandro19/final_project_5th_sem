import {    take, takeLatest, call, put } from "redux-saga/effects";
import {GET_CURRENT_ORDER,DELETE_ORDER, GET_CURRENT_ORDER_SUCCESS,UPDATE_ORDER,SAVE_CART,CREATE_ORDER,SAVE_ORDER} from "../constants/order";
import {LOGIN_SUCCESS} from "../constants/auth";
import {refreshUser} from "../../services/auth.service";
import {getCurrentOrderApi,getUpdateOrderApi,deleteOrderService,saveCartService,createOrderService} from "../../services/order.service";
import {setCurrentOrder} from "../actions/order";
import {setUser} from "../actions/user";

import { saveCartAction, saveOrderAction } from "../actions/order";

function* createOrderFlow(action) {
  try {

    const order = action.payload;
    const user = action.user

    const {orderCreated} = yield call(createOrderService, order)  
    if (orderCreated) {
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

function* getCurrentOrderFlow(action){

    try{
        const orderId= action.payload;
        const order = yield call(getCurrentOrderApi,orderId);
        // console.log(orderId);
        // console.log(order);
        yield put(setCurrentOrder(order));
    }catch(error){
        console.log(error);
        throw error;
    }
}
function* updateOrderFlow(action){
    try{
        const order = action.payload;
        const user= action.user;
        const updateOrder = yield call(getUpdateOrderApi,order)
        const payload=yield call(refreshUser,user);
        yield put(setUser(payload.token, payload.userId, payload.role, payload.exp,payload.username,payload.firstName, payload.lastName,payload.email,payload.phone,payload.address,payload.cart,payload.emailConfirmed,payload.orders));
        yield put({
          type: LOGIN_SUCCESS,
        });
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully updated the order",
              severity:"success"
          }
      })
    }catch(error){
   
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


function* saveCartFlow(action) {
    try {

      const user = action.payload.user;
      const cart = action.payload.cart;
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

function* orderWatcher(){
    yield takeLatest(GET_CURRENT_ORDER,getCurrentOrderFlow);
    yield takeLatest(UPDATE_ORDER,updateOrderFlow);
    yield takeLatest(DELETE_ORDER,deleteOrderFlow)
    yield takeLatest(SAVE_CART, saveCartFlow) 
    yield takeLatest(CREATE_ORDER, createOrderFlow) 
}

export default orderWatcher;
