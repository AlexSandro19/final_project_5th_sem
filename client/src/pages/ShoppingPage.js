import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

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

const ShoppingPage=(test)=>{
    const classes=useStyles();
    
    return(
        <div>
            <Item />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        test:state.test
    };
};
    
export default connect(mapStateToProps,{})(ShoppingPage)