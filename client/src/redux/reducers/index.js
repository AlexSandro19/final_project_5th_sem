import { combineReducers } from "redux";
import items from "./item";
import auth from "./auth";
import user from "./user";
import message from "./message";
export default combineReducers({
  auth,user,items,message
  });