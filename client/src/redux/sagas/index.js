import { all } from "redux-saga/effects";
import ItemSaga from "./item"
import LoginSaga from "./auth";
export default function* rootSaga() {
  yield all([LoginSaga(),ItemSaga(),]);
}
