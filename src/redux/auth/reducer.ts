import * as Type from './types';
import { Action } from '../../interfaces';

interface UsersState {
    isLoading: boolean;
    isLogin: boolean;
    error: Error | null | string;
}

const initialState: UsersState = {
    isLoading: false,
    isLogin: false,
    error: null,
};

export const authReducer = <T extends boolean>(
    state =  initialState,
    action: Action<T>,
): UsersState => {

    switch (action.type) {
        case Type.SET_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
                isLoading: true,
                error: null,
            };

        case Type.SET_LOGOUT:
            return {
                ...state,
                isLogin: false,
                isLoading: false,
                error: null,
            };

        default:
            return state;
    }
};
