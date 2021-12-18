import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import { connect } from "react-redux";
import ShoppingPage from "./pages/ShoppingPage";
import ItemPage from "./pages/ItemPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
const Routes=({currentItem})=>{
    
import ContactForm from "./components/ContactForm";
    return(
        <Switch>
            <Route path="/" exact><HomePage/> </Route>
            <Route path="/allitems" exact><ShoppingPage/> </Route>
            <Route path="/addToCart" exact></Route>
            <Route path="/item" exact><ItemPage currentItem={currentItem}/></Route>
            <Route path="/register" exact><RegistrationPage /></Route>
            <Route path="/profile" exact><ProfilePage /></Route>
            
            <Route path="/contact" exact><ContactForm/> </Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    )
}
const mapStateToProps = (state) => ({
    currentItem: state.currentItem
  });
  
 export default connect(mapStateToProps)(Routes);
