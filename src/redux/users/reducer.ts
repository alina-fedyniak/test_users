import * as Type from './types';
import { Status, User, Action } from '../../interfaces';

interface DriversState {
    drivers: User[];
    statuses: Status[];
    isLoading: boolean;
    error: Error | null | string;
}

const initialState: DriversState = {
    drivers: [],
    statuses: [],
    isLoading: false,
    error: null,
};

type Sort = (a: User, b: User) => number;
type Reducer = User & User[] & Status[] & Error & number & Sort;

export const usersReducer = <T extends Reducer>(
    state: DriversState,
    action: Action<T>,
): DriversState => {
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
                drivers: action.payload,
                isLoading: false,
                error: null,
            };

        default:
            return state;
    }
};
