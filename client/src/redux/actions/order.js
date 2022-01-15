import {
    GET_CURRENT_ORDER,
    DELETE_ORDER, 
    GET_CURRENT_ORDER_SUCCESS,
    UPDATE_ORDER,SAVE_CART,
    CREATE_ORDER,
    SAVE_ORDER,
    GET_ALL_ORDERS,
    GET_ALL_ORDERS_SUCCESS,} from "../constants/order"
export const setCurrentOrder = (order) => {

    return {
        type: GET_CURRENT_ORDER_SUCCESS,
        payload: order
    }
} 
export const getAllOrders = (token) => {
    return {
        type: GET_ALL_ORDERS,
        payload: token
    }
} 
export const getAllOrdersSUCCESS = (orders) => {

    return {
        type: GET_ALL_ORDERS_SUCCESS,
        payload: orders
    }
}
export const getCurrentOrder = (orderId) => {

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

export const createOrderAction = (user, order) => {

    return {
        type: CREATE_ORDER,
        payload: order, 
        user
    }
}


// export const saveOrderAction = (order) => {
//     console.log("In the actions - saveOrder", order);
//     return {
//         type: SAVE_ORDER,
//         payload: order
//     }
// }

export const saveCartAction = (user, cart,activityType) => {
   
    return {
        type: SAVE_CART,
        payload: {user, cart},
        activityType:activityType
    }
}