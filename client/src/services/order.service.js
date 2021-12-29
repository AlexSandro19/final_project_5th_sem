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