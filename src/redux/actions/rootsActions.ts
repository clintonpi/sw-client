import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
	Roots,
	RootsAction,
} from '../../models';

export const fetchRoots = (): RootsAction => ({ type: FETCH_ROOTS });

export const fetchRootsSuccess = (roots: Roots): RootsAction => ({ type: FETCH_ROOTS_SUCCESS, payload: roots });

export const fetchRootsFailure = (error: Error): RootsAction => ({ type: FETCH_ROOTS_FAILURE, payload: error });
