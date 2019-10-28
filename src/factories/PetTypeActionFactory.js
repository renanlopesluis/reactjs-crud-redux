import PetTypeActionEnum from '../enums/PetTypeActionEnum.js';
export default class PetTypeActionFactory{

   static instance(state, action){
        switch(action.type){
            case PetTypeActionEnum.LIST: return {...state, list: action.list, petType: action.petType}
            case PetTypeActionEnum.SELECT_PETTYPE: return {...state, petType: action.petType}
            default: return {...state, error: action.error}
        }
    }
}