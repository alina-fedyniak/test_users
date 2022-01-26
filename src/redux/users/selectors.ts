import { User, State } from '../../interfaces';

const usersSelector = (state: State): User[] =>
    state.usersReducer.users;

const loadingSelector = (state: State): boolean =>
    state.usersReducer.isLoading;

export { usersSelector, loadingSelector };
