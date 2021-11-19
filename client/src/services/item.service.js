import axios from "axios";

const storageName = "allItems";
const getItemsUrl = "/api/items";

// export const getLocalAuthToken = () =>
//   JSON.parse(localStorage.getItem(storageName));

// export const setAuthToken = (token) => {
//   localStorage.setItem(storageName, JSON.stringify(token));
// };

// export const removeAuthToken = () => {
//   localStorage.removeItem(storageName);
// };

export const getItems = () => {
    console.log("In the service");
    return axios.get(getItemsUrl)
                .then((response) => response.data)
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 