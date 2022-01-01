import { all } from "redux-saga/effects";
import ContactSaga from "./contact"
import ItemSaga from "./item"
import LoginSaga from "./auth";
import RegisterSaga from "./register"
export default function* rootSaga() {
  yield all([LoginSaga(),ItemSaga(),RegisterSaga(),ContactSaga()]);
}
