import {    take, takeLatest, call, put } from "redux-saga/effects";
import {GET_CURRENT_ORDER, UPDATE_ORDER,DELETE_ORDER} from "../constants/order";
import {LOGIN_SUCCESS} from "../constants/auth";
import {refreshUser} from "../../services/auth.service";
import {getCurrentOrderApi,getUpdateOrderApi,deleteOrderService} from "../../services/order.service";
import {setCurrentOrder,} from "../actions/order";
import {setUser} from "../actions/user";
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
        console.log(user);
        const updateOrder = yield call(getUpdateOrderApi,order)
        const payload=yield call(refreshUser,user);
        console.log(payload);
        yield put(setUser(payload.token, payload.userId, payload.role, payload.exp,payload.username,payload.name,payload.email,payload.phone,payload.address,payload.cart,payload.emailConfirmed,payload.orders));
        yield put({
          type: LOGIN_SUCCESS,
        });
    }catch(error){
        console.log(error);
        throw error;
    }
}
function* deleteOrderFlow(action){
    try{
        const deleteOrder= action.payload;
        yield call(deleteOrderService,deleteOrder)
    }catch(error){
        console.log(error);
        throw error;
    }
}
function* orderWatcher(){
    yield takeLatest(GET_CURRENT_ORDER,getCurrentOrderFlow);
    yield takeLatest(UPDATE_ORDER,updateOrderFlow);
    yield takeLatest(DELETE_ORDER,deleteOrderFlow)
}

export default orderWatcher;
import { takeLatest, call, put } from "redux-saga/effects";
import { CREATE_ORDER, SAVE_ORDER, SAVE_CART } from "../constants/order";
import {GET_CURRENT_ORDER, UPDATE_ORDER} from "../constants/order";
import {LOGIN_SUCCESS} from "../constants/auth";
import {refreshUser} from "../../services/auth.service";
import {setUser} from "../actions/user";

import { saveCartAction, saveOrderAction } from "../actions/order";

import { saveCartService, saveOrderService } from  "../../services/order.service";

function* saveCartFlow(action) {
    try {
      console.log("In saga -- saveCartFlow")
      const user = action.payload.user;
      const cart = action.payload.cart;
      const {didUserUpdate} = yield call(saveCartService, user, cart)  
      console.log("didUserUpdate", didUserUpdate)
      if (didUserUpdate) {
        const payload=yield call(refreshUser,user);
        console.log("RefreshUser", payload);
        yield put(setUser(payload.token, payload.userId, payload.role, payload.exp,payload.username,payload.firstName,payload.lastName, payload.email,payload.phone,payload.address,payload.cart,payload.emailConfirmed,payload.orders));
        yield put({
          type: LOGIN_SUCCESS,
        });
      } 
    //   yield put(setUser(updatedUser))

    }catch (error) {
      console.log(error.message);
      console.log(error);
    }
}

// function* shoppingPageFlow(action) {
    
//     try {

//       const responseMessage = yield call(requestItems);
//         console.log(responseMessage)
//       yield put(requestAllItemsSuccess(responseMessage));
  
//     } catch (error) {
//       console.log(error.message);
//       console.log(error);
//     }
// }

function* orderPageWatcher() {
    console.log("orderPageWatcher called");
    // yield takeLatest(REQUEST_ALL_ITEMS, shoppingPageFlow );
    yield takeLatest(SAVE_CART, saveCartFlow)    
}



export default orderPageWatcher
