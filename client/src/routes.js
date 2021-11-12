import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export const Routes=()=>{

    return(
        <Switch>
            <Route path="/" exact><HomePage/> </Route>
            <Route path="/allitems" exact></Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    )
}