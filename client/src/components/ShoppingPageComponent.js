import React, { useEffect, useCallback } from "react";
import { Card, CardActionArea, CardContent,ListItem, ListItemIcon,ListItemText,Toolbar, List, Drawer, Grid, Box, Typography, ButtonBase, Badge } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item"
import {Loader} from "./Loader"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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
    fab:{
    },

}))

export const ShoppingPageComponent=({items})=>{
    const classes=useStyles();
    console.log("In the ShoppingPageComponent");
    console.log(Array.isArray(items));
    console.log(items);

    
    return (
        !items.length ? <Loader></Loader> : ( //if posts.length is 0 then is false, !false => true
            <>
            <Grid container spacing={3} alignItems="stretch" >
                {/* <Grid key={"sideBar"} item sm={6} md={4} >
                    <Tabs variant="permanent" open >
                    <Toolbar />
                    <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                        ))}
                        </List>
                        </Drawer>
                    </Grid> */}
                 {items.map((item) => ( 
                    <Grid key={item._id} item xs={12} sm={6} md={4}>
                        <Item item={item} />  
                    </Grid>      
                 ))}
            </Grid>
                    
                     <Badge color="secondary" badgeContent={1}>
                         <Fab color="primary" className={classes.fab} aria-label="Shopping Bag"  >
                             <ShoppingBasketIcon />
                         </Fab>
                     </Badge>
            </>
    ))
}

