import React from 'react';
import { connect } from 'react-redux';
import BasicCaringService from '../../services/basicCaring.service.js';

function onChange(code) {
    return {type:"SelectWork", selectedWork: code, sublist: new BasicCaringService().getWorks(code)}
}
const BasicCaringWorkOptionsList = ({works, selectedWork, dispatch}) => (
    <span className="input-group-addon">
        {
            works.map((work)=>
                (
                    <label className="radio-inline">
                        <input type="radio" onChange={()=> dispatch(onChange(work.code))} checked={selectedWork === work.code}/>
                        <i>{work.description}</i>
                    </label>    
                )
            )
        }
    </span>
);

export default connect(state => ({works: state.workReducer.list, selectedWork: state.workReducer.selectedWork}))(BasicCaringWorkOptionsList);