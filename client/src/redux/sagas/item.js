import { takeLatest, call, put } from "redux-saga/effects";
import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS } from "../constants/item";

import { requestAllItemsSuccess } from "../actions/item";

import { requestItems } from  "../../services/item.service";

function* requestAllItemsFlow(action) {
    
    try {

      const { payload } = action.payload
      const responseMessage = yield call(payload);
  
      yield put(requestAllItemsSuccess(responseMessage));
  
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
}

function* requestAllItemsWatcher() {
    yield takeLatest(REQUEST_ALL_ITEMS, requestAllItemsFlow )
}

export default requestAllItemsWatcher
