import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Navigation } from "./components/Navigation";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#212123",
    color:"#989898",
    width:"100%",
    display:"flex",
    flexDirection:"column ",
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding:theme.spacing,
    display: "block",
    width: 1,
  },
  footer:{}
  
}));

function App() {

  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <header >
        <Navigation/>
      </header>
      <main className={classes.content}>
      <Typography height="1000px">TEST</Typography> <Typography>TEST</Typography> <Typography>TEST</Typography> <Typography>TEST</Typography><Typography>TEST</Typography> <Typography>TEST</Typography><Typography>TEST</Typography> <Typography>TEST</Typography><Typography>TEST</Typography>
      </main>
      <footer className={classes.footer}>
        <FacebookIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
      </footer>
    </div>
    </Router>
  );
}

export default App;
