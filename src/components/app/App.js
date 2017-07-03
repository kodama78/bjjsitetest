import React, { Component } from 'react';
import './app.css';
import Template from '../template/template';
import Routes from '../../routes';

class App extends Component {
    render() {
        return (
            <Template> {/*Template contains the header and footer of our app and wraps all other components*/}
                <Routes /> {/*Routes component is used here to display child components*/}
            </Template>
        );
    };
}

export default App;
