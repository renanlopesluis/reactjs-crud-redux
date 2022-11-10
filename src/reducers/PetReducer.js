import PetActionStrategy from '../strategies/PetActionStrategy.js';
const INITIAL_STATE =  {pet:{}, list:[], filteredList:[]};

export default function petReducer(state = INITIAL_STATE, action){
    return PetActionStrategy.instance(state, action);
}