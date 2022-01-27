import { put, takeLatest } from '@redux-saga/core/effects';
import { setLogIn, setLogOut } from './actions';
import { SET_LOGIN, SET_LOGOUT } from './types';

interface Params {
    type: string;
    payload: string;
}

function setLogInSaga({ payload }: Params) {
    const auth = localStorage.getItem('auth');

    if (!auth) {
        localStorage.setItem('auth', 'authorized');
    }

    put(setLogIn(payload));
}

function setLogOutSaga({ payload }: Params) {
    localStorage.setItem('auth', payload);
    put(setLogOut(payload));
}

export function* watchAuth(): Generator {
    yield takeLatest(SET_LOGIN, setLogInSaga);
    yield takeLatest(SET_LOGOUT, setLogOutSaga);
}
