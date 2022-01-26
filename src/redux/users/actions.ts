import * as Type from './types';
import { createAction } from '../../utils/helpers/createAction';

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
}