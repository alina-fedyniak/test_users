import { User, State } from '../../interfaces';

const usersSelector = (state: State): User[] =>
    state.usersReducer.users;

export { usersSelector };
