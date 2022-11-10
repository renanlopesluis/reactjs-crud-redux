import WorkActionStrategy from '../strategies/WorkActionStrategy.js';
const INITIAL_STATE =  {list:[], sublist:[], selectedWork: 0, selectedSubWork:0};

export default function workReducer(state = INITIAL_STATE, action){
    return WorkActionStrategy.instance(state, action);
}