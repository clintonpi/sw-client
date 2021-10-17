import { getRoots } from '../../api';
import { FETCH_ROOTS, Roots } from '../../models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRootsFailure, fetchRootsSuccess } from '../actions/rootsActions';

function *fetchRootsHandler() {
	try {
		const roots: Roots = yield call(getRoots);

		yield put(fetchRootsSuccess(roots));
	} catch {
		yield put(fetchRootsFailure(new Error('There was an error processing your request')));
	}
}

function *fetchRootsSaga() {
	yield takeLatest(FETCH_ROOTS, fetchRootsHandler);
}

export default fetchRootsSaga;
