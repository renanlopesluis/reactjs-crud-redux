import { combineReducers } from 'redux';
import petReducer from './PetReducer.js';
import workReducer from './WorkReducer.js';

export default combineReducers({
    petReducer, workReducer
});