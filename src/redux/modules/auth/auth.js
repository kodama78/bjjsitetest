import * as firebase from 'firebase';
const auth = firebase.auth();
// ------------------------------------
// Constants
// ------------------------------------

export const AUTH_USER = 'AUTH_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const REQUEST_PASSWORD_RESET = 'REQUEST_PASSWORD_RESET';
export const RECEIVE_PASSWORD_RESET = 'RECEIVE_PASSWORD_RESET';

// ------------------------------------
// Actions
// ------------------------------------

export function authUser() {
    return {
        type: AUTH_USER
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}
// ------------------------------------
// Login
// ------------------------------------

// ------------------------------------
// Account
// ------------------------------------
export function createAccount(email, password) {
    return (dispatch) => {
        return auth.createUserWithEmailAndPassword(email, password)
                   .then(() => {
                       dispatch(authUser());
                   })
                   .catch(error => {
                       console.log(error);
                       dispatch(authError(error));
                   });
    }
}

export function login(email, password) {
    return dispatch => {
        return auth.signInWithEmailAndPassword(email, password)
                   .then((res) => {
                        dispatch(authUser());
                        console.log(res);
                    })
                   .catch(error => {
                        console.log(error);
                        dispatch(authError(error));
                    });
    }
}

export function signOut() {
    console.log('signing out');
    return dispatch => {
        auth.signOut()
            .then(() => {
                dispatch(signOutUser());
            })
    }
}

export function verifyAuth() {
    return dispatch => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                console.log('user logged in');
                dispatch(authUser());
            } else {
                dispatch(signOutUser());
                console.log('user logged out');
            }
        });
    }
}
// ------------------------------------
// Password
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
    authenticated: undefined,
    error: undefined
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, user: action.payload, authenticated: true };
        case SIGN_OUT_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { error: action.payload.message };

        default:
            return state;
    }

}
