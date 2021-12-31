import axios from "axios";
const getCurrentOrderUrl="/api/orders/order";
const updateOrderUrl="/api/orders/updateOrder";
const deleteOrderUrl="/api/orders/deleteOrder";
export const getCurrentOrderApi=(orderId)=>{
    //console.log(orderId);
    return axios.post(getCurrentOrderUrl,{orderId})
    .then(response=>response.data)
    .catch((err)=>{
        console.log(err);
        throw err.response.data})
}
export const getUpdateOrderApi=(order)=>{
    return axios.post(updateOrderUrl,{order})
    .then(response=>response.data)
    .catch((err)=>{
        console.log(err);
        throw err.response.data})
}
export const deleteOrderService = (order)=>{
    return axios.post(deleteOrderUrl,{order})
    .then(response => response.data)
    .catch((err)=>{
        console.log(err);
        throw err.response.data;
    })
}
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