import { call, put, takeLatest } from '@redux-saga/core/effects';
import { userApi } from '../../api/userService';
import { Status, User, Action, InfoUpdate } from '../../interfaces';
import { FETCH_USERS_REQUEST } from './types';
import {
    fetchUsersSuccess,
    fetchUsersError,
} from './actions';

interface IUpdateDriver {
    id: number;
    info: Record<string, InfoUpdate>;
}

function* fetchUsersSaga(): Generator {
    try {
        const users = (yield call(userApi.fetchUsers)) as User[];
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
