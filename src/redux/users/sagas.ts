import { call, put, takeLatest } from '@redux-saga/core/effects';
import { userApi } from '../../api/userService';
import { User, Action } from '../../interfaces';
import { FETCH_USERS_REQUEST } from './types';
import {
    fetchUsersSuccess,
    fetchUsersError,
    fetchMoreUsersSuccess,
} from './actions';

function* fetchUsersSaga({ payload }: Action<any>): Generator {
    try {
        const users = (yield call(userApi.fetchUsers)) as User[];

        if (payload) {
            yield put(fetchMoreUsersSuccess(users));
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
