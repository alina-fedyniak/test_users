import { State } from '../../interfaces';

const authSelector = (state: State)  =>
    state.usersReducer.isLogin;

export { authSelector };