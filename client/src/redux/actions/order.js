import { CREATE_ORDER, SAVE_ORDER, SAVE_CART } from "../constants/order";


export const createNewOrder = (order) => {
    console.log("In the actions - createNewOrder", order);
    return {
        type: CREATE_ORDER,
        payload: order
    }
}


export const saveOrderAction = (order) => {
    console.log("In the actions - saveOrder", order);
    return {
        type: SAVE_ORDER,
        payload: order
    }
}

export const saveCartAction = (user, cart) => {
    console.log("In the actions - saveOrder", user, cart);
    return {
        type: SAVE_CART,
        payload: {user, cart}
    }
}