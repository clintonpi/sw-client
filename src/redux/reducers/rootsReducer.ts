import { roots } from './initialState';
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS, RootsAction, RootsState } from '../../models';

const rootsReducer = (state: RootsState = roots, action: RootsAction): RootsState => {
	switch (action.type) {
		case FETCH_ROOTS:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_ROOTS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case FETCH_ROOTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				payload: action.payload,
			};

		default:
			return state;
	}
};

export default rootsReducer;
