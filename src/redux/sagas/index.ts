import fetchRootSaga from './fetchRootSaga';
import fetchRootsSaga from './fetchRootsSaga';
import { all, fork } from 'redux-saga/effects';

function *indexSaga() {
	yield all([fork(fetchRootsSaga), fork(fetchRootSaga)]);
}

export default indexSaga;
