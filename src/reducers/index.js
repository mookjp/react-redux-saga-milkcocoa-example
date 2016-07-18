import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loading from './loading';
import message from './message';

export default combineReducers({
  message,
  loading,
  routing: routerReducer,
});
