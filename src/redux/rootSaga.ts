import { all } from '@redux-saga/core/effects';
import { watchUsers } from './users/sagas';
import { watchLocale } from './locale/sagas';
import { watchAuth } from './auth/sagas';

export default function* rootSaga(): Generator {
    yield all([watchUsers(), watchLocale(), watchAuth()]);
}