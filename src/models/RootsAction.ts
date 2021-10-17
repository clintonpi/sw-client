import { Roots } from '.';
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS } from './constants';

interface FetchRoots {
  type: typeof FETCH_ROOTS;
}

interface FetchRootsSuccess {
  type: typeof FETCH_ROOTS_SUCCESS;
  payload: Roots
}

interface FetchRootsFailure {
  type: typeof FETCH_ROOTS_FAILURE;
  payload: Error;
}

export type RootsAction = FetchRoots | FetchRootsSuccess | FetchRootsFailure;
