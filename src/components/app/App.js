import React, { Component } from 'react';
import './app.css';
import Template from '../template/template';
import Routes from '../../routes';

class App extends Component {
    render() {
        return (
            <Template>
                <Routes />
            </Template>
        );
    };
}

export default App;
