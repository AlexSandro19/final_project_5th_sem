import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, SET_CURRENT_ITEM, SET_FILTERED_ITEMS, CREATE_ITEM, UPDATE_ITEM } from "../constants/item";

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

export const setCurrentItem = (item) => {
    console.log("In the actions - setCurrentItem");
    return {
        type: SET_CURRENT_ITEM,
        payload: item
    }
} 

export const setFilteredItems = (filteredItems) => {
    console.log("In the actions - setFilteredItems");
    return {
        type: SET_FILTERED_ITEMS,
        payload: filteredItems
    }
} 

export const createItem = (newItem) => {
    console.log("In the actions - createItem");
    return {
        type: CREATE_ITEM,
        payload: newItem
    }
} 

export const updateItem = (updatedItem) => {
    console.log("In the actions - updateItem", updatedItem);
    return {
        type: UPDATE_ITEM,
        payload: {updatedItem}
    }
} 


