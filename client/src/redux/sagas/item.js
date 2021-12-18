import { takeLatest, call, put } from "redux-saga/effects";
import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, UPDATE_ITEM } from "../constants/item";

import { requestAllItemsSuccess, setCurrentItem } from "../actions/item";

import { requestItems, updateItem } from  "../../services/item.service";

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

function* shoppingPageWatcher() {
    console.log("shoppingPageWarcher called");
    yield takeLatest(REQUEST_ALL_ITEMS, shoppingPageFlow );
    yield takeLatest(UPDATE_ITEM, updateItemFlow)    
}



export default shoppingPageWatcher
