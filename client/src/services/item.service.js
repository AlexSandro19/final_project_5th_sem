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
    console.log("In the service --  requestItems");
    return axios.get(requestItemsUrl)
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 
export const updateItem = (item) => {
    console.log("In the service -- updateItem");
    return axios.post(updateItemUrl, item) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 