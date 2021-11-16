import { Card, CardActionArea, CardContent, Grid, Box, Typography, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";

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
const HomePage=(test)=>{
const classes=useStyles();

return(
    <div>
        <Grid container  direction="row" justifyContent="center"  alignItems="center" spacing={2}>
        <Grid item xs={6}>
        <Box style={{height:"600px"}}   className={classes.back}>
        <Typography variant="h4" textAlign="center">Most Popular Items Right Now</Typography>
        <Grid container spacing={1}>
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
        </Grid>
        </Box>
        </Grid>
       
        <Grid item xs={6}>
        <Box style={{height:"600px"}}   className={classes.back}>
        <Typography variant="h4" textAlign="center">Most Popular Items Right Now</Typography>
        <Grid container spacing={1}>
        <Grid item xs={6}>
        <Card style={{backgroundColor:"#C4C4C4"}} className={classes.card}>
            <CardContent>
                <Typography variant="h5">Dinning Chair</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo egestas nunc faucibus risus sit quisque...</Typography>
            </CardContent>
        <CardActionArea   style={{width:"50%",marginLeft:"25%",backgroundColor:"#FDFFEE"}} >
        <Typography style={{textAlign:"center"}} variant="h6">CART</Typography>
        </CardActionArea>
        </Card>
        </Grid></Grid></Box></Grid>
        </Grid>
    </div>
)
}
const mapStateToProps = (state) => {
    return {
      test:state.test
    };
  };
  
export default connect(mapStateToProps,{})(HomePage)