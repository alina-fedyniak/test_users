import * as Type from './types';
import { createAction } from '../../utils/helpers/createAction';

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);
const fetchAddUsersSuccess = createAction(Type.FETCH_ADD_USERS_SUCCESS);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    fetchAddUsersSuccess,
}