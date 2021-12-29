import {GET_CURRENT_ORDER,DELETE_ORDER, GET_CURRENT_ORDER_SUCCESS,UPDATE_ORDER} from "../constants/order"
export const setCurrentOrder = (order) => {
    // console.log("In the actions - setCurrentItem");
    // console.log(order);
    return {
        type: GET_CURRENT_ORDER_SUCCESS,
        payload: order
    }
} 

export const getCurrentOrder = (orderId) => {
    // console.log("In the actions - setCurrentItem");
    // console.log(orderId);
    return {
        type: GET_CURRENT_ORDER,
        payload: orderId
    }
} 
export const updateOrder = (user,order) =>{
    return{
        type:UPDATE_ORDER,
        payload:order,
        user
    }
}
export const deleteOrder = (order) =>{
    return{
        type:DELETE_ORDER,
        payload:order,
    }
}