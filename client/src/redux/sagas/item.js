import { takeLatest, call, put } from "redux-saga/effects";
import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS } from "../constants/item";

import { requestAllItemsSuccess } from "../actions/item";

import { requestItems } from  "../../services/item.service";

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
    
}

export default shoppingPageWatcher
