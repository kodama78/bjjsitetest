import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { createAccount, login, signOut } from '../../redux/modules/auth/auth';

class Login extends Component {

    state = {
        email: null,
        password: null,
        confirmPassword: null
    };

    auth = firebase.auth();

    handleLogin = () => {
        console.log('here I am');
        const emailUser = this.state.email;
        const pass = this.state.password;
        return  this.props.login(emailUser, pass)

    };

    handleSignOut = () => {
        console.log('sign out');
        this.props.signOut();
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

    handleConfirmPassword = (e) => {
            this.setState({
                confirmPassword: e.target.value
            });
        };

    handleCreateAccount = () => {
        const { email, password, confirmPassword } = this.state;
        if (password === confirmPassword) {
            return this.props.createAccount(email, password)
        }

    };

    render() {
        const { password, confirmPassword } = this.state;
        return (
            <div className="container">
                <input type="email" id="email" placeholder="Email"
                       onChange={ this.handleEmail }/>
                <input type="password" id="password" placeholder="Password"
                       onChange={ this.handlePassword } />
                <input type="password" id="confirmPassword" placeholder="Confirm Password"
                       onChange={ this.handleConfirmPassword } />
                { (password !== confirmPassword) ? <label>Passwords must match</label> : null }
                <button id="login-btn" onClick={ this.handleLogin }>
                    Log In
                </button>
                <button id="sign-up-btn"  onClick={ this.handleCreateAccount }>
                    Sign Up
                </button>
                <button id="sign-out-btn"  onClick={ this.handleSignOut }>
                    Sign Out
                </button>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    const user = state.auth.user;
    return {
        user
    };
};

export default connect(mapStateToProps, { createAccount, login, signOut })(Login);