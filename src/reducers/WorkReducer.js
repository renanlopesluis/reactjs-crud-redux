import WorkActionFactory from '../factories/WorkActionFactory.js';
const INITIAL_STATE =  {list:[], sublist:[], selectedWork: 0, selectedSubWork:0};

export default function petReducer(state = INITIAL_STATE, action){
    return WorkActionFactory.instance(state, action);
}