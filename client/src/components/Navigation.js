import { AppBar, ButtonBase } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AuthPage  from "../pages/AuthPage";
import { connect } from "react-redux";
import {loginRequest} from "../redux/actions/auth";
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex + 1,
    },
   
  }));
  

 const Navigation =(requesting,errors,loginRequest)=>{
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const handleClickOpen = () => {
      setModalOpen(true);
    };
  
    const handleClose = () => {
      setModalOpen(false);
    };

    return(
        <>
        <AppBar position="sticky" style={{backgroundColor:"#C4C4C4"}}  className={classes.appBar}>
            <Toolbar>
      
            <Typography variant="h5" className={classes.grow}>
            <ButtonBase
            component={NavLink}
            to="/"
            activeClassName="active"
            >
            <Typography variant="h5" className={classes.grow}>
            TREE
            </Typography>
            </ButtonBase>
            </Typography>
            <Button
            className={classes.button}
            color="inherit"
            component={NavLink}
            to="/allitems"
            activeClassName="active"
          >
            All Items
          </Button>
            <Button
            className={classes.button}
            color="inherit"
            onClick={handleClickOpen}
            activeClassName="active"
          >
            Login
          </Button>
            </Toolbar>
        </AppBar>
        <AuthPage modalOpen={modalOpen} handleClose={handleClose} ></AuthPage>
        </>
    )

}

const mapStateToProps = (state) => {
  return {
    requesting: state.auth.requesting,
    errors: state.auth.errors,
  };
};

export default connect(mapStateToProps, { loginRequest })(
  Navigation
);