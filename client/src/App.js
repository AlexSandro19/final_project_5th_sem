import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";
import MessagePage from "./pages/MessagePage"
import Routes from "./routes";
import Navigation  from "./components/Navigation";
const theme = createTheme()
const useStyles = makeStyles(() => ({
 
  root: {
    backgroundColor:"#FFE6B6",
    color:"#000000",
    width:"100%",
    height: '100%',
  },
  content: {
    width:"100%",
    height:"100%",
    flexGrow: 2,
    padding:theme.spacing(8),
    display: "flex",
    flexDirection:"row",
   
  },
  footer:{
    paddingTop:"10%",
  }
  
}));

function App() {

  const classes = useStyles();
  return (

    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <Navigation/>
      <MessagePage/>
      <main className={classes.content}>
      <Routes />
      </main>
      <footer className={classes.footer}>
        <IconButton>
        <FacebookIcon/>
        </IconButton>
       
        <IconButton> <InstagramIcon/></IconButton>
        <IconButton>  <LinkedInIcon/></IconButton>
      </footer>
    </div>
    </Router>
  );
}

export default App;
