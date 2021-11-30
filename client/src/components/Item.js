import { Card, CardActionArea, CardActions, CardContent, Grid, Box, Typography, ButtonBase, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems, setCurrentItem,addItemToBasket} from "../redux/actions/item";
import {Link} from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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

const Item =({item,itemsInBasket, setCurrentItem,addItemToBasket})=>{
    const classes = useStyles();
    console.log(itemsInBasket);
    const addToCartPressed = (e) => {
        e.preventDefault();
        console.log(e);
        addItemToBasket(item);
    
    }

    return(
        <>
            <Card style={{backgroundColor:"#C4C4C4"}} className={classes.card}>
            <CardActionArea style={{backgroundColor:"#FDFFEE"}} component={Link} to="/item" onClick={() => {setCurrentItem(item)}}>
                <CardContent>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                    <Typography variant="body1">{item.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={addToCartPressed}><Typography style={{textAlign:"center"}} variant="h6">CART <AddShoppingCartIcon  fontSize="default"/></Typography></Button>
            </CardActions>
            </Card>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        itemsInBasket: state.items.itemsInBasket, 
    };
};

export default connect(mapStateToProps, {setCurrentItem, addItemToBasket})(Item);