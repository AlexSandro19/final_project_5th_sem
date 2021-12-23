import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import { connect } from "react-redux";
import ShoppingPage from "./pages/ShoppingPage";
import ItemPage from "./pages/ItemPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import ContactForm from "./components/ContactForm";
import EditItemPage from "./pages/EditOrderPage";
import BasketPage from "./pages/BasketPage";
import FormPage from "./pages/FormPage";
import EditOrderPage from "./pages/EditOrderPage";

const Routes=({currentItem})=>{
    return(
        <Switch>
            <Route path="/" exact><HomePage/> </Route>
            <Route path="/allitems" exact><ShoppingPage/> </Route>
            <Route path="/addToCart" exact></Route>
            <Route path="/item" exact><ItemPage currentItem={currentItem}/></Route>
            <Route path="/register" exact><RegistrationPage /></Route>
            <Route path="/profile" exact><ProfilePage /></Route>
            <Route path="/editItem/" exact><FormPage/></Route>
            <Route path="/editOrder/" exact><EditOrderPage></EditOrderPage></Route>
            <Route path="/viewOrder/" exact></Route>
            <Route path="/contact" exact><ContactForm/> </Route>
            <Route path="/basket" exact><BasketPage/></Route>
            <Route path="/updateItem" exact><FormPage/></Route>


            <Redirect to="/" ></Redirect>
        </Switch>
    )
}
const mapStateToProps = (state) => ({
    currentItem: state.items.currentItem
  });
  
 export default connect(mapStateToProps)(Routes);
