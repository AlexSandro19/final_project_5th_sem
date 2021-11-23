import React, { useEffect, useCallback } from "react";
import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item"

import Item from "../components/Item"; 

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

export const ShoppingPage=({store})=>{
    const classes=useStyles();
    console.log(store);
    
    return (
        <div>
            
            {store.map((item) => { 
                console.log(item)
            })}
            
        </div>
    )
}

