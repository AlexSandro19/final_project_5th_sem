import { all } from "redux-saga/effects";

import LoginSaga from "./auth";
export default function* rootSaga() {
  yield all([LoginSaga(),]);
}
