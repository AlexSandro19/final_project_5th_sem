import React, { useEffect, useCallback } from "react";
import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item";
import {ShoppingPageComponent} from "../components/ShoppingPageComponent"
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

const ShoppingPage=({items, requestAllItems})=> {
    const classes=useStyles();
    const fetchItems = useCallback(() => {requestAllItems()}, [])
    // requestAllItems();
    useEffect( () => {
        
        console.log("useEffect called");
        fetchItems();
        console.log("after getting data", items.data);
    }, [fetchItems])
    const workArray=[]
    for(let i in items.data){
        console.log(items.data[i])
        workArray.push(items.data[i])
    }

    return (
        <ShoppingPageComponent items={workArray}>
        </ShoppingPageComponent>
             //<Grid  container alignItems="stretch" spacing={3}>
              /* {items.data.map((item) => (
                     <Grid key={item._id} item xs={12} sm={6}>
                        <Item item={item} />
                    </Grid>      
                  ))} */
            //</Grid>
       

    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items
    };
};
    
export default connect(mapStateToProps,{requestAllItems})(ShoppingPage)