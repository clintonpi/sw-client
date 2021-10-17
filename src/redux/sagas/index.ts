import fetchRootsSaga from './fetchRootsSaga';
import { all, fork } from 'redux-saga/effects';

function *indexSaga() {
	yield all([fork(fetchRootsSaga)]);
}

export default indexSaga;
