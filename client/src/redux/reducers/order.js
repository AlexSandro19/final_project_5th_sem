import {GET_CURRENT_ORDER,GET_CURRENT_ORDER_SUCCESS,UPDATE_ORDER,DELETE_ORDER} from "../constants/order"
import { CREATE_ORDER, SAVE_ORDER, SAVE_CART } from "../constants/order";
const initialState={
    currentOrder:{},
    order:{}
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CURRENT_ORDER:
            return{
            currentOrder:null
            }
        case GET_CURRENT_ORDER_SUCCESS:
            return{
                currentOrder:action.payload
            }
        case UPDATE_ORDER:
            return{
                currentOrder:action.payload
            }
        case DELETE_ORDER:
            return{
                currentOrder:null,

            }
            case CREATE_ORDER:
                return {
                  order: [...action.payload],
              };
              case SAVE_ORDER:
                return {
                  order: [...action.payload],
              };
              
        default: 
        return state;
    }

}

export default reducer