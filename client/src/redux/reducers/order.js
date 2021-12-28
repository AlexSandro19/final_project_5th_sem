import { CREATE_ORDER, SAVE_ORDER, SAVE_CART } from "../constants/order";

const initialState = {order: {}};


const reducer = (state = initialState, action) => {
  console.log("In the Basket Reducer", action.type);
  switch (action.type) {
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
};
export default reducer;
