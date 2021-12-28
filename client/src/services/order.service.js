import axios from "axios";

const createOrderUrl = "/api/createOrder";
const saveCartUrl = "/api/saveCart"

export const createOrderService = (order) => {
    console.log("In the service -- createOrder");
    return axios.post(createOrderUrl, order) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 

export const saveCartService = (user, cart) => {
    console.log("In the service -- saveCart");
    return axios.post(saveCartUrl, {user, cart}) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 