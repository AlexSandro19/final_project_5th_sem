import React, { Fragment, useEffect, useCallback, useState } from "react";
import { Card, CardActionArea, CardActions, CardContent, Grid, Box, Typography, ButtonBase, Button, Snackbar, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem} from "../redux/actions/item";
import {addItemToBasket} from "../redux/actions/basket";
import {Link} from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
        borderRadius: '15',
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

})) 

const Item =({item,itemsInBasket, userIsAuthenticated, setCurrentItem,addItemToBasket})=>{
    const classes = useStyles();

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const addToCartPressed = (e) => {
        e.preventDefault();
        const index = itemsInBasket.indexOf(item);
        if (index === -1){
            itemsInBasket.push(item);
        }else{
            itemsInBasket.splice(index, 0, item);
        }
        addItemToBasket(itemsInBasket);
        setOpenSnackbar(true);
    
    }

    const capitalizeString = (initialStr) => {
        return initialStr
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    };

    return(
        <>
            <Card style={{backgroundColor:"#C4C4C4"}} className={classes.card}>
            <CardActionArea style={{backgroundColor:"#FDFFEE", height: '150px'}} component={Link} to="/item" onClick={() => {setCurrentItem(item)}}>
                <CardContent style = {{display: 'flex', flexDirection: 'column'}}>
                    <div>
                    <Typography variant="h5">{item.name}</Typography>
                
                <Button component={Link} to="/updateItem">
                    <MoreHorizIcon fontSize="default" />
                </Button> { /*why there are doube  in style*/ }
                </div>
                    <Typography variant="body1">{item.description}</Typography>
                    <Typography variant="body1" style = {{display: 'flex',flexDirection:'column',alignItems:'flex-end'}}>{item.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            {/* {userIsAuthenticated ? 
                <Button onClick={addToCartPressed}><Typography style={{textAlign:"center"}} variant="h6">CART <AddShoppingCartIcon  fontSize="default"/></Typography></Button>
                : <></>
            } */}
             <Button onClick={addToCartPressed}><Typography style={{textAlign:"center"}} variant="h6">CART <AddShoppingCartIcon  fontSize="default"/></Typography></Button>
                </CardActions>
            </Card>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => {setOpenSnackbar(false)}}
                // message={`${item.name} item was added to Basket!`}
                // action={action}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    <b>{capitalizeString(item.name)}</b> item was added to Basket!
                </Alert>
            </Snackbar>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        itemsInBasket: state.basket.itemsInBasket, 
        userIsAuthenticated: state.user.isAuthenticated,
    };
};

export default connect(mapStateToProps, {setCurrentItem, addItemToBasket})(Item);