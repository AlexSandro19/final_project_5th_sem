import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import { connect } from "react-redux";
const Routes=()=>{

    return(
        <Switch>
            <Route path="/" exact><HomePage/> </Route>
            <Route path="/allitems" exact></Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    )
}
const mapStateToProps = (state) => ({
    
  });
  
 export default connect(mapStateToProps)(Routes);
