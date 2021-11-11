import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const drawerWidth = 190;
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex + 1,
    },
   
  }));
  

export const Navigation =()=>{
    const classes = useStyles();
    return(
        <>
        <AppBar style={{backgroundColor:"#C4C4C4"}}  className={classes.appBar}>
            <Toolbar>
            <Typography variant="h5" className={classes.grow}>
              TREE
            </Typography>
            <Typography>
                ALL ITEMS
            </Typography>
            <Typography>
                LOGIN
            </Typography>
            </Toolbar>
        </AppBar>
        
        </>
    )

}