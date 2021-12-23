import {GET_CURRENT_ORDER} from "../constants/order"
export const setCurrentOrder = (order) => {
    console.log("In the actions - setCurrentItem");
    console.log(order);
    return {
        type: GET_CURRENT_ORDER,
        payload: order
    }
} 