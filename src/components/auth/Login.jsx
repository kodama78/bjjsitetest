import React, { Component } from 'react';
import * as firebase from 'firebase';

class Login extends Component {

    state = {
        email: null,
        password: null
    };

    auth = firebase.auth();

    login = () => {
        console.log('here I am');
        const emailUser = this.state.email;
        const pass = this.state.password;
        this.auth.signInWithEmailAndPassword(emailUser, pass)
            .then(() => console.log('you\'ve logged in'))
            .catch(e => console.log(e.message));
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    createUser = () => {
        const emailUser = this.state.email;
        const pass = this.state.password;
        this.auth.createUserWithEmailAndPassword(emailUser, pass)
            .then(() => console.log('you\'ve created a login'))
            .catch(e => console.log(e.message));
    };

    render() {
        return (
            <div className="container">
                <input type="email" id="email" placeholder="Email"
                       onChange={ this.handleEmail }/>
                <input type="password" id="password" placeholder="Password"
                       onChange={ this.handlePassword } />
                <button id="login-btn" onClick={ this.login }>
                    Log In
                </button>
                <button id="sign-up-btn"  onClick={ this.createUser }>
                    Sign Up
                </button>
            </div>
        );
    }

};

export default Login;