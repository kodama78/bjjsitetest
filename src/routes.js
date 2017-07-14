import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Jumbotron,
    Login,
    Shop
} from './components';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ Jumbotron }/>
            <Route path="/shop" component={ Shop }/>
            <Route path="/login" component={ Login }/>
        </Switch>
    </div>
);

export default Routes;