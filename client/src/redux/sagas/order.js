import { takeLatest, call, put } from "redux-saga/effects";
import { CREATE_ORDER } from "../constants/order";

import { createOrder } from "../actions/order";

import { createNewOrder } from  "../../services/order.service";

function* updateItemFlow(action) {
    try {
      console.log("In saga -- updateItemFlow")
      const item = action.payload.updatedItem;
      const updatedItem = yield call(updateItem, item)
      yield put(setCurrentItem(updatedItem))

    }catch (error) {
      console.log(error.message);
      console.log(error);
    }
}

function* shoppingPageFlow(action) {
    
    try {

      const responseMessage = yield call(requestItems);
        console.log(responseMessage)
      yield put(requestAllItemsSuccess(responseMessage));
  
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
}

function* orderPageWatcher() {
    console.log("orderPageWatcher called");
    yield takeLatest(REQUEST_ALL_ITEMS, shoppingPageFlow );
    yield takeLatest(UPDATE_ITEM, updateItemFlow)    
}



export default orderPageWatcher
