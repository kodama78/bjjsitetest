import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from '../../redux/store';
import './app.css';
import Template from '../template/template';
import Routes from '../../routes';
const store = createStore();


class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <Template>
                        <Routes />
                    </Template>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
