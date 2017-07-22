import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


export default function configureStore(history, initialState) {
    const middleware = applyMiddleware(thunk);
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            middleware
        )
    );
    return store;
}