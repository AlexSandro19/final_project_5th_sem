import React, { useEffect, useCallback } from "react";
import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item"
import {ShoppingPageComponent} from "../components/ShoppingPageComponent"
import {Loader} from "../components/Loader"
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

const ShoppingPage=({items = { data:[] }, requestAllItems})=> {
    const classes=useStyles();
    const fetchItems = useCallback(() => {requestAllItems()}, [])
    // requestAllItems();
    useEffect( () => {
        
        console.log("useEffect called");
        fetchItems();
        console.log("after getting data", items.data);
    }, [fetchItems])
    
    console.log(items.data);
    return (
        
        // !items.data.length ? <Loader /> : ( //if posts.length is 0 then is false, !false => true
        //     <Grid  container alignItems="stretch" spacing={3}>
        //          {items.map((item) => (
        //             <Grid key={item._id} item xs={12} sm={6}>
        //                 <Item item={item} />
        //             </Grid>      
        //          ))}
        //     </Grid>
        //)
        <div>Hi</div>
       

    )
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items
    };
};
    
export default connect(mapStateToProps,{requestAllItems})(ShoppingPage)