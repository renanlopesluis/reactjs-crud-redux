import React from 'react';
import BasicCaringService from '../../services/basicCaring.service.js';

export default class BasicCaringWorkChild extends React.Component{
    
    service = new BasicCaringService();

    constructor(props){
        super(props);
        this.state = {
            selectedWorkOption: 0
        }
    }

    loadBasicWorks(workCode){
        this.setState({
            basicWorks: this.service.getWorks(workCode)
        })
    }

    onExecuteWork = () =>{
        if(this.props.workCode && this.refs.basicWorks){
            this.service.executeWork(this.props.workCode, this.props.petId, this.refs.basicWorks.value).then(
                response=>{
                    if(response && response.data)
                        alert(response.data.message);
                }
            );
        }
    }
    
    render(){
        return (
            <React.Fragment>
                <div>
                    <label for="type">Work type:</label>
                    <select class="form-control" name="basicWorks" ref="basicWorks" required>
                    {  
                        this.service.getWorks(this.props.workCode).map((work)=>
                            (
                                <option value={work.code}>{work.description}</option>
                            )
                        )
                    }
                    </select>  
                    <button  type="button" class="btn btn-primary" onClick={this.onExecuteWork}>OK</button>
                </div>        
            </React.Fragment>
        );
    }
}

