import { User, State } from '../../interfaces';

const usersSelector = (state: State): User[] =>
    state.usersReducer.users;

const isLoginSelector = (state: State)  =>
    state.usersReducer.isLogin;

const loadingSelector = (state: State): boolean =>
    state.usersReducer.isLoading;

export { usersSelector, isLoginSelector, loadingSelector };
