import * as Type from './types';
import { createAction } from '../../utils/helpers/createAction';

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);
const fetchIsLogin = createAction(Type.FETCH_IS_LOGIN);
const fetchIsLogout = createAction(Type.FETCH_IS_LOGOUT);


export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    fetchIsLogin,
    fetchIsLogout
}