import { State } from '../../interfaces';

const authSelector = (state: State)  =>
    state.authReducer.isLogin;

export { authSelector };