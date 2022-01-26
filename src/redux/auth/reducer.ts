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

export const authReducer = <T extends boolean>(
    state =  initialState,
    action: Action<T>,
): UsersState => {

    switch (action.type) {
        case Type.SET_AUTH:
            return {
                ...state,
                isLogin: action.payload,
                isLoading: true,
                error: null,
            };

       /* case Type.FETCH_IS_LOGOUT:
            return {
                ...state,
                isLogin: false,
                isLoading: true,
                error: null,
            };*/

        default:
            return state;
    }
};
