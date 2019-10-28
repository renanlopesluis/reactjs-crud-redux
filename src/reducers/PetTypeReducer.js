import PetTypeActionFactory from '../factories/PetTypeActionFactory.js';
const INITIAL_STATE =  {petType:{}, list:[]};

export default function petTypeReducer(state = INITIAL_STATE, action){
    return PetTypeActionFactory.instance(state, action);
}