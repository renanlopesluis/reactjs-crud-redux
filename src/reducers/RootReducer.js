import { combineReducers } from 'redux';
import petReducer from './PetReducer.js';
import petTypeReducer from './PetTypeReducer.js';
import workReducer from './WorkReducer.js';

export default combineReducers({
    petReducer, petTypeReducer, workReducer
});