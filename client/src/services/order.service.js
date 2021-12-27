import axios from "axios";
const getCurrentOrderUrl="/api/orders/order";
const updateOrderUrl="/api/orders/updateOrder";
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