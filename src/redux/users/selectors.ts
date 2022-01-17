import { User, Status, State } from '../../interfaces';

const driversSelector = (state: State): User[] =>
    state.usersReducer.users;

export { driversSelector };
