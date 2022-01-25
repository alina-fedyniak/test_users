import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { localeReducer } from './locale';

export default combineReducers({
    usersReducer,
    localeReducer,
});
