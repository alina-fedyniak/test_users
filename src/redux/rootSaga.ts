import { all } from '@redux-saga/core/effects';
import { watchUsers } from './users/sagas';

export default function* rootSaga(): Generator {
    yield all([watchUsers()]);
}