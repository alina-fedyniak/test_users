import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { localeReducer } from './locale';
import { authReducer } from './auth';

export default combineReducers({
    usersReducer,
    localeReducer,
    authReducer,
});
