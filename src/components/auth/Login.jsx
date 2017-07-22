import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { createAccount } from '../../redux/modules/auth/auth';

class Login extends Component {

    state = {
        email: null,
        password: null,
        confirmPassword: null
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

    handleConfirmPassword = (e) => {
            this.setState({
                confirmPassword: e.target.value
            });
        };

    handleCreateAccount = () => {
        const { email, password, confirmPassword } = this.state;
        if (password === confirmPassword) {
            return this.props.createAccount(email, password)
                .then((res) => console.log('promise returned', res))
                .catch(e => console.log('e is ', e))
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
                <button id="login-btn" onClick={ this.login }>
                    Log In
                </button>
                <button id="sign-up-btn"  onClick={ this.handleCreateAccount }>
                    Sign Up
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

export default connect(mapStateToProps, { createAccount })(Login);