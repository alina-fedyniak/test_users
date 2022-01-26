import { put, takeLatest } from '@redux-saga/core/effects';
import { setAuth } from './actions';
import { SET_AUTH } from './types';

interface Params {
    type: string;
    payload: string;
}

/*function* setAuthSaga() {
    const auth = localStorage.getItem('auth');
    try {
        if (!auth) {
            localStorage.setItem('auth', 'authorized');
        }
        yield put(loginSuccess());
    } catch (error) {
        return error;
    }
}

function* logoutWorker() {
    try {
        yield put(logoutSuccess());
    } catch (error) {
        return error;
    }
}*/

function setAuthSaga({ payload }: Params) {
    localStorage.setItem('auth', payload);
    put(setAuth(payload));
}

export function* watchAuth(): Generator {
    yield takeLatest(SET_AUTH, setAuthSaga);
}
