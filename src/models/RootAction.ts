import { PayloadWithRoot } from '.';
import { FETCH_ROOT, FETCH_ROOT_FAILURE, FETCH_ROOT_SUCCESS } from './constants';

interface FetchRoot {
  type: typeof FETCH_ROOT;
  payload: string;
}

interface FetchRootSuccess {
  type: typeof FETCH_ROOT_SUCCESS;
  payload: PayloadWithRoot;
}

interface FetchRootFailure {
  type: typeof FETCH_ROOT_FAILURE;
  payload: Error;
}

export type RootAction = FetchRoot | FetchRootSuccess | FetchRootFailure;
