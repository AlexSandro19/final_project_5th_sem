import { all } from "redux-saga/effects";
import ContactSaga from "./contact"
import LoginSaga from "./auth";
export default function* rootSaga() {
  yield all([LoginSaga(),ContactSaga(),]);
}
