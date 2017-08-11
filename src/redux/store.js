import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { verifyAuth } from './modules/auth/auth';


export default function configureStore(history, initialState) {
    const middleware = applyMiddleware(thunk);
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(middleware)
    );

    store.dispatch(verifyAuth());

    return store;
}