import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import {requestAllItems} from "../redux/actions/item"

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

const Item =({requesting,errors,requestAllItems})=>{
    const classes = useStyles();
    return(
        <>
        <Grid item xs={6}>
            <Card style={{backgroundColor:"#C4C4C4"}} className={classes.card}>
                <CardContent>
                    <Typography variant="h5">Dinning Chair</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo egestas nunc faucibus risus sit quisque...</Typography>
                </CardContent>
            <CardActionArea style={{width:"50%",marginLeft:"25%",backgroundColor:"#FDFFEE"}} >
                <Typography style={{textAlign:"center"}} variant="h6">CART</Typography>
            </CardActionArea>
            </Card>
        </Grid>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
    requesting: state.auth.requesting,
    errors: state.auth.errors,
    };
};

export default connect(mapStateToProps, { requestAllItems })(Item);