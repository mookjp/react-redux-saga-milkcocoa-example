import { createAction, handleActions } from 'redux-actions';

/**
 * Action Types
 */
export const LOADING = 'LOADING';

/**
 * Action creators
 */

export const setLoading = createAction(LOADING);

/**
 * Initial state
 */
const INITIAL_STATE = {
  isLoading: false,
};

/**
 * Reducer
 */
export default handleActions({
  [setLoading]: (state, { payload: isLoading }) => Object.assign({}, state, { isLoading }),
}, INITIAL_STATE);
