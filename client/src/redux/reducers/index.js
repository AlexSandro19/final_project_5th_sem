import { combineReducers } from "redux";
import items from "./item";
import basket from "./basket";
import auth from "./auth";
import user from "./user";
import message from "./message";
import order from "./order"
export default combineReducers({
  auth,user,items, basket,order,message
  });