import { User, State } from '../../interfaces';

const usersSelector = (state: State): User[] =>
    state.usersReducer.users;

const isLodingSelector = (state: State): boolean => state.usersReducer.isLoading;

export { usersSelector, isLodingSelector };
