import { combineReducers } from "redux";
import item from "./item";
import auth from "./auth";
import user from "./user";

export default combineReducers({
  auth,user,item
  });