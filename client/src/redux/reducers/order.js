import {GET_CURRENT_ORDER,GET_CURRENT_ORDER_SUCCESS,UPDATE_ORDER,DELETE_ORDER} from "../constants/order"
const initialState={
    currentOrder:{}
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
        default: 
        return state;
    }

}

export default reducer