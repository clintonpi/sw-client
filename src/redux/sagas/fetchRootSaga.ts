import { getRoot } from '../../api';
import { FETCH_ROOT, Root, RootAction } from '../../models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRootFailure, fetchRootSuccess } from '../actions/rootActions';

function *fetchRootHandler(action: RootAction) {
	try {
		// @ts-ignore
		const root: Root = yield call(getRoot, action.payload);

		yield put(fetchRootSuccess(root));
	} catch {
		yield put(fetchRootFailure(new Error('There was an error processing your request')));
	}
}

function *fetchRootSaga() {
	yield takeLatest(FETCH_ROOT, fetchRootHandler);
}

export default fetchRootSaga;
