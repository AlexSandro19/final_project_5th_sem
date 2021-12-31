import React, { useEffect, useCallback } from "react";
import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item"
import OrderDetailsComponent from "../components/OrderDetailsComponent"
import {Loader} from "../components/Loader"
import Item from "../components/Item"; 
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const useStyles=makeStyles(()=>({
    back:{
        margin:"2%",
        backgroundColor:"#D7CD79",
        flexGrow:2,
        width: '600px',
        height: '100%',
        paddingBottom:"7%",
    },
    card:{
       
        marginTop:"10%",
        marginLeft:"5%",
        width:"90%",
    },

}))

const OrderDetails=({items, itemsInBasket, user})=> {
    const classes=useStyles();
    console.log("User in OrderDetails", user)
    let itemsInCart = 0

    ///////// !!!!!!!!!!!!!!!!!!!!!!!!! HAS TO BE REDONE !!!!!!!!!!!!!!!!!!!!!!
    if (typeof user.cart !== "undefined"){
        itemsInCart = user.cart.reduce((sum, item) => sum + item.quantityInCart, 0)
    }

    return (
        (itemsInCart !== itemsInBasket.length) ? <Loader></Loader> : ( //if posts.length is 0 then is false, !false => true
            <>
        <OrderDetailsComponent user={user}>
        </OrderDetailsComponent>
        </>
    ))
}

const mapStateToProps = (state) => {
    return {
        itemsInBasket: state.basket.itemsInBasket, 
        user: state.user,
    };
};
    
export default connect(mapStateToProps,{})(OrderDetails)