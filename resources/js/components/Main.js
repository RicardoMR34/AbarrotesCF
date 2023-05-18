import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./Navigation";
import Home from "./Home";
import StoreEmployee from "./StoreEmployee";
import StoreProduct from "./StoreProduct";
import UpdateProduct from './UpdateProduct';
import UpdateEmployee from './UpdateEmployee';
import IndexProduct from './IndexProduct';
import IndexEmployee from './IndexEmployee';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Main() {
    return (
        <Router>
            <main>
                <Navigation />
                <Switch>
                    <Route path="/127.0.0.1/AbarrotesCF/public/Home" exact component={Home} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/StoreEmployee" component={StoreEmployee} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/StoreProduct" component={StoreProduct} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/UpdateProduct" component={UpdateProduct} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/UpdateEmployee" component={UpdateEmployee} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/IndexProduct" component={IndexProduct} />
                    <Route path="/127.0.0.1/AbarrotesCF/public/IndexEmployee" component={IndexEmployee} />
                </Switch>
            </main>
        </Router>
    )
}

export default Main;
if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}