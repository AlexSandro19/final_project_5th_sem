import { REQUEST_ALL_ITEMS, REQUEST_ALL_ITEMS_SUCCESS, SET_CURRENT_ITEM, SET_FILTERED_ITEMS, CREATE_ITEM, UPDATE_ITEM } from "../constants/item";

export const requestAllItemsSuccess = (data) => {
    return {
        type: REQUEST_ALL_ITEMS_SUCCESS,
        message: {
        text: "Successfully seceived all items",
        },
        payload: data,
    };
};

export const requestAllItems = () => {
    return {
        type: REQUEST_ALL_ITEMS,
        message: "Requesting all items",
    };
};

export const setCurrentItem = (item) => {

    return {
        type: SET_CURRENT_ITEM,
        payload: item
    }
} 

export const setFilteredItems = (filteredItems) => {
    return {
        type: SET_FILTERED_ITEMS,
        payload: filteredItems
    }
} 

export const createItem = (newItem) => {
    return {
        type: CREATE_ITEM,
        payload: newItem
    }
} 

export const updateItem = (updatedItem) => {
    return {
        type: UPDATE_ITEM,
        payload: {updatedItem}
    }
} 


