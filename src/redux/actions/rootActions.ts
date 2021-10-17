import {
	FETCH_ROOT,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS,
	Root,
	RootAction,
} from '../../models';

export const fetchRoot = (rootType: string): RootAction => ({ type: FETCH_ROOT, payload: rootType });

export const fetchRootSuccess = (root: Root): RootAction => ({ type: FETCH_ROOT_SUCCESS, payload: root });

export const fetchRootFailure = (error: Error): RootAction => ({ type: FETCH_ROOT_FAILURE, payload: error });
