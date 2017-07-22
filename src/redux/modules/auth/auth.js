import * as firebase from 'firebase';
const auth = firebase.auth();
// ------------------------------------
// Constants
// ------------------------------------

export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
export const RECEIVE_CREATE_USER = 'RECEIVE_CREATE_USER';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';

export const REQUEST_PASSWORD_RESET = 'RQUEST_PASSWORD_RESET';
export const RECEIVE_PASSWORD_RESET = 'RECEIVE_PASSWORD_RESET';

// ------------------------------------
// Actions
// ------------------------------------

export function requestCreateUser(email, password) {
    return {
        type: REQUEST_CREATE_USER,
        payload: { email, password }
    }
}

export function receiveCreateUser(json) {
    return {
        type: RECEIVE_CREATE_USER,
        payload: json
    }
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}
export function receiveLogin() {
    return {
        type: RECEIVE_LOGIN
    }
}

// ------------------------------------
// Login
// ------------------------------------

// ------------------------------------
// Account
// ------------------------------------
export function createAccount(email, password) {
    console.log('email: ', ...arguments);
    return (dispatch) => {
        dispatch(requestCreateUser(email, password));
        return auth.createUserWithEmailAndPassword(email, password)
                   .then((res) => console.log('you\'ve created a login', res))
                   .catch(e => console.log(e.message));
    }
}

export const actions = {
  createAccount
};
// ------------------------------------
// Password
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
    user: undefined
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CREATE_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }

}
