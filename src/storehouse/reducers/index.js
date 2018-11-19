// Built-in Modules
import {combineReducers} from 'redux';

// Custom Modules
import {loadingSpinnerReducer, languageReducer} from './common';
import {factoryReducer} from './factory';

export default combineReducers({
  loadingSpinnerReducer,
  languageReducer,
  factoryReducer
});
