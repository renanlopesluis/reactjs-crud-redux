import React from 'react';
import { connect } from 'react-redux';
import BasicCaringService from '../../services/basicCaring.service.js';
    
function onChange(event){
    return {type:"SelectSubWork", selectedSubwork: event.target.value}

}

function onExecuteWork(petId, workCode, subworkCode){
    if(petId && workCode && subworkCode){
        new BasicCaringService().executeWork(workCode, petId, subworkCode).then(
            response=>{
                if(response && response.data)
                    alert(response.data.message);
            }
        );
    }
}
    
const BasicCaringWorkOptionsSublist = ({sublist, work, pet, subwork, dispatch}) =>(
            <React.Fragment>
                <div>
                    <label for="type">Work type:</label>
                    <select class="form-control" name="basicWorks" onChange={(event) => dispatch(onChange(event))}required>
                    {  
                        sublist.map((subwork)=>
                            (
                                <option value={subwork.code}>{subwork.description}</option>
                            )
                        )
                    }
                    </select>  
                    <button  type="button" class="btn btn-primary" onClick={() => onExecuteWork(pet.id, work, subwork)}>OK</button>
                </div>        
            </React.Fragment>
        );
export default connect(state => ({sublist: state.workReducer.sublist, work: state.workReducer.selectedWork, subwork: state.workReducer.selectedSubwork, pet: state.petReducer.pet}))(BasicCaringWorkOptionsSublist);