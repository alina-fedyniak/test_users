import * as Type from './types';
import { User, Action } from '../../interfaces';

interface UsersState {
    users: User[];
    isLoading: boolean;
    error: Error | null | string;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
};

type Reducer = User & User[] & Error & number;

export const usersReducer = <T extends Reducer>(
    state: UsersState,
    action: Action<T>,
): UsersState => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                error: null,
            };

        case Type.FETCH_ADD_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: false,
                error: null,
            };
        default:
            return state;
    }
};
