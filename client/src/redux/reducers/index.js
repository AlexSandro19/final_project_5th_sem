import { combineReducers } from "redux";

import contact from "./contact";
import auth from "./auth";
import user from "./user";
export default combineReducers({
  auth,user,contact
  });