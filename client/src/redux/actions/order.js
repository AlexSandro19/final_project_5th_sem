import { CREATE_ORDER, SAVE_ORDER } from "../constants/order";


export const createNewOrder = (order) => {
    console.log("In the actions - createNewOrder", order);
    return {
        type: CREATE_ORDER,
        payload: order
    }
}


export const saveOrder = (order) => {
    console.log("In the actions - saveOrder", order);
    return {
        type: SAVE_ORDER,
        payload: order
    }
}