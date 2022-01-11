import { takeLatest, call, put } from "redux-saga/effects";
import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, UPDATE_ITEM } from "../constants/item";

import { requestAllItemsSuccess, setCurrentItem } from "../actions/item";

import { requestItems, updateItem } from  "../../services/item.service";

function* updateItemFlow(action) {
    try {
      const item = action.payload.updatedItem;
      const updatedItem = yield call(updateItem, item)
      yield put(setCurrentItem(updatedItem))

    }catch (error) {
    }
}

function* shoppingPageFlow(action) {
    
    try {

      const responseMessage = yield call(requestItems);
      yield put(requestAllItemsSuccess(responseMessage));
  
    } catch (error) {
    }
}

function* shoppingPageWatcher() {
  
    yield takeLatest(REQUEST_ALL_ITEMS, shoppingPageFlow );
    yield takeLatest(UPDATE_ITEM, updateItemFlow)    
}



export default shoppingPageWatcher
