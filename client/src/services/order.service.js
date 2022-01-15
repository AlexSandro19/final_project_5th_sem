import axios from "axios";
const getCurrentOrderUrl="/api/orders/order";
const getAllOrdersUrl="/api/orders/orders";
const updateOrderUrl="/api/orders/updateOrder";
const deleteOrderUrl="/api/orders/deleteOrder";
const createOrderUrl = "/api/orders/createOrder";
const saveCartUrl = "/api/orders/saveCart"

export const getAllOrders= (token)=>{
    return axios.post(getAllOrdersUrl,{},{headers:{authorization:`Bearer ${token}`}})
        .then((response)=>response.data)
        .catch((error)=>{
        console.log(error);
        throw error.response.data;
    })
}
export const createOrderService = (order) => {
    return axios.post(createOrderUrl, order) 
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 

export const saveCartService = (user, cart) => {
    return axios.post(saveCartUrl, {user, cart}) 
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                    throw error.response.data;
                });
} 
export const getCurrentOrderApi=(orderId)=>{
    //console.log(orderId);
    return axios.post(getCurrentOrderUrl,{orderId})
    .then(response=>response.data)
    .catch((err)=>{
        console.log(err);
        throw err.response.data})
}
export const getUpdateOrderApi=(order)=>{
    return axios.post(updateOrderUrl,order)
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
