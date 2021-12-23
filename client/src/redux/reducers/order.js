import {GET_CURRENT_ORDER} from "../constants/order"
const initialState={
    currentOrder:{}
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_CURRENT_ORDER:
            return{
            currentOrder:action.payload
            }
      
        default: 
        return state;
    }

}

export default reducer