import { createAction, handleActions } from 'redux-actions';

/**
 * Action Types
 */
export const POST_MESSAGE = 'POST_MESSAGE';
export const SET_MESSAGE = 'SET_MESSAGE';

/**
 * Action creators
 */

export const postMessage = createAction(POST_MESSAGE);
export const setMessage = createAction(SET_MESSAGE);

/**
 * Initial state
 */
const INITIAL_STATE = {
  messages: [
    {
      name: 'bot',
      message: 'Hi, this is an initial message.',
      timestamp: Date.now(),
    },
  ],
};

/**
 * Reducer
 */
export default handleActions({
  [postMessage]: (state) => state,
  [setMessage]: (state, { payload }) => {
    const messages = state.messages.slice(0);
    messages.push(payload);
    return Object.assign({}, state, { messages });
  },
}, INITIAL_STATE);
