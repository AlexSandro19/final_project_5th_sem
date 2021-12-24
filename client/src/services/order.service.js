import axios from "axios";

const createOrderUrl = "/api/createOrder";


export const createOrder = (order) => {
    console.log("In the service -- createOrder");
    return axios.post(createOrderUrl, order) // ?????
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 