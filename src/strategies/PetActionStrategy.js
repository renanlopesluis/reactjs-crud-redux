import PetActionEnum from '../enums/PetActionEnum.js';
export default class PetActionStrategy{

   static instance(state, action){
        switch(action.type){
            case PetActionEnum.LIST: return {...state, list: action.list, filteredList: action.filteredList}
            case PetActionEnum.REMOVE: return {...state, filteredList: action.filteredList}
            case PetActionEnum.FILTER: return {...state, filteredList: action.filteredList}
            case PetActionEnum.GET: return {...state, pet: action.pet}
            default: return {...state, error: action.error}
        }
    }
}