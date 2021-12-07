import { ADD_ITEM_TO_BASKET } from "../constants/basket";


export const addItemToBasket = (items) => {
    console.log("In the actions - addItemToBasket", items);
    return {
        type: ADD_ITEM_TO_BASKET,
        payload: items
    }
}