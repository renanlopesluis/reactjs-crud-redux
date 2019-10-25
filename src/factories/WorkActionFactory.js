import WorkActionEnum from '../enums/WorkActionEnum.js';
export default class WorkActionFactory{

   static instance(state, action){
        switch(action.type){
            case WorkActionEnum.SELECT_WORK: return {...state, selectedWork: action.selectedWork, sublist: action.sublist}
            case WorkActionEnum.SELECT_SUBWORK: return {...state, selectedSubwork: action.selectedSubwork}
            case WorkActionEnum.LIST: return {...state, list: action.list}
            case WorkActionEnum.EXECUTE: return {...state, response: action.response}
            default: return {...state, error: action.error}
        }
    }
}