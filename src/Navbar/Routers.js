import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Cart from "../Pages/ShoppingCart/Cart"
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Help from "../Pages/Help/Help";

class Routers extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/help" component={Help}></Route>
                    <Route component={PageNotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Routers;
