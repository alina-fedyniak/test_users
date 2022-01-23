import * as Type from './types';
import { User, Action } from '../../interfaces';

interface UsersState {
    users: User[];
    isLoading: boolean;
    isLogin: boolean;
    error: Error | null | string;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    isLogin: false,
    error: null,
};

type Sort = (a: User, b: User) => number;
type Reducer = User & User[] & Error & number & Sort;

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

        case Type.FETCH_IS_LOGIN:
            return {
                ...state,
                isLogin: true,
                error: null,
            };

        case Type.FETCH_IS_LOGOUT:
            return {
                ...state,
                isLogin: false,
                error: null,
            };

        default:
            return state;
    }
};
