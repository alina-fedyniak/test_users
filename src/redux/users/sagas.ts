import { call, put, takeLatest } from '@redux-saga/core/effects';
import { userApi } from '../../api/userService'
import { User, Action } from '../../interfaces';
import { FETCH_USERS_REQUEST } from './types';
import {
    fetchUsersSuccess,
    fetchUsersError,
    fetchAddUsersSuccess,
} from './actions';

function* fetchUsersSaga<T extends string>({ payload }: Action<T>): Generator {
    try {
        const users = (yield call(userApi.fetchUsers, payload)) as User[];

        if (payload) {
            yield put(fetchAddUsersSuccess(users));
        } else {
            yield put(fetchUsersSuccess(users));
        }
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
