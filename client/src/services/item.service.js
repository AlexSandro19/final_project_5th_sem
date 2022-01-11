import axios from "axios";

const storageName = "allItems";
const requestItemsUrl = "/api/items";
const updateItemUrl = "/api/updateItem";
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
                    throw error.response.data;
                });
} 
export const updateItem = (item) => {
    return axios.post(updateItemUrl, item) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    throw error.response.data;
                });
} 