import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

// Modules for different stores
import auth from './modules/auth/auth';

export default combineReducers({
    auth,
    router
});