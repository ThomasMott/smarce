import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';

//define stores (auth and error)
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
});
