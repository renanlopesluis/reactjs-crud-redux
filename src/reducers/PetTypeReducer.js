import PetTypeActionStrategy from '../strategies/PetTypeActionStrategy.js';
const INITIAL_STATE =  {petType:{}, list:[]};

export default function petTypeReducer(state = INITIAL_STATE, action){
    return PetTypeActionStrategy.instance(state, action);
}