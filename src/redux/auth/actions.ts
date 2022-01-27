import { SET_LOGIN, SET_LOGOUT } from './types';
import { createAction } from '../../utils/helpers/createAction';

export const setLogIn = createAction(SET_LOGIN);
export const setLogOut = createAction(SET_LOGOUT);
