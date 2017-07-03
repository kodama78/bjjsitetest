import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Jumbotron } from './components';
const Routes = () => (
    <div>
        <Switch>
            <Route path="/" component={ Jumbotron }/>
        </Switch>
    </div>
);

export default Routes;