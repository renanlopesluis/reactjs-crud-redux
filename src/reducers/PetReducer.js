import PetActionFactory from '../factories/PetActionFactory.js';
const INITIAL_STATE =  {pet:{}, list:[], filteredList:[]};

export default function petReducer(state = INITIAL_STATE, action){
    return PetActionFactory.instance(state, action);
}