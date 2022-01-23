import { User, State } from '../../interfaces';

const usersSelector = (state: State): User[] =>
    state.usersReducer.users;

const isLoginSelector = (state: State)  =>
    state.usersReducer.isLogin;

export { usersSelector, isLoginSelector };
