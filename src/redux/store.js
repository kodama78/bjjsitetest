import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default (data = {}) => {
    return createStore(rootReducer, data, middleware)
}