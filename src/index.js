import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import './index.css';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1TGYLCTq6WDVL0KDxqoAd1IYGkcyH0fc",
    authDomain: "flow-and-roll.firebaseapp.com",
    databaseURL: "https://flow-and-roll.firebaseio.com",
    projectId: "flow-and-roll",
    storageBucket: "flow-and-roll.appspot.com",
    messagingSenderId: "954740492435"
};

firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);
