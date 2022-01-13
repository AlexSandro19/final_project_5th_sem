import axios from "axios";

const storageName = "allItems";
const requestItemsUrl = "/api/items";
const updateItemUrl = "/api/updateItem";
const createItemUrl ="/api/createItem";
const deleteItemUrl="/api/deleteItem";
// export const getLocalAuthToken = () =>
//   JSON.parse(localStorage.getItem(storageName));

// export const setAuthToken = (token) => {
//   localStorage.setItem(storageName, JSON.stringify(token));
// };

// export const removeAuthToken = () => {
//   localStorage.removeItem(storageName);
// };

export const requestItems = () => {

    return axios.get(requestItemsUrl)
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 
export const updateItem = (item) => {

    return axios.post(updateItemUrl, item) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 
export const createItem = (currentItem) => {

    return axios.post(createItemUrl, currentItem) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 
export const deleteItemService = (deleteItem) => {

    return axios.post(deleteItemUrl, deleteItem) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 