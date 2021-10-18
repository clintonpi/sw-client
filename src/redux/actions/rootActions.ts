import {
	FETCH_ROOT,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS,
	PayloadWithRoot,
	RootAction,
} from '../../models';

export const fetchRoot = (rootType: string): RootAction => (
	{ type: FETCH_ROOT, payload: rootType }
);

export const fetchRootSuccess = (payLoadWithRoot: PayloadWithRoot): RootAction => (
	{ type: FETCH_ROOT_SUCCESS, payload: payLoadWithRoot }
);

export const fetchRootFailure = (error: Error): RootAction => (
	{ type: FETCH_ROOT_FAILURE, payload: error }
);
