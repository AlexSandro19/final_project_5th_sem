import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS } from "../constants/item";

export const requestAllItemsSuccess = (data) => {
    console.log("In the actions -- requestAllItemsSuccess");
    return {
        type: REQUEST_ALL_ITEMS_SUCCESS,
        message: {
        text: "Successfully seceived all items",
        },
        payload: data,
    };
};

export const requestAllItems = () => {
    console.log("In the actions -- requestAllItems");
    return {
        type: REQUEST_ALL_ITEMS,
        message: "Requesting all items",
    };
};
