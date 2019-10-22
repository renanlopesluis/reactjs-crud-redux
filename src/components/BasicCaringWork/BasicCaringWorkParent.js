import React from 'react';
import BasicCaringService from '../../services/basicCaring.service.js';
import BasicCaringWorkChild from './BasicCaringWorkChild.js'

export default class BasicCaringWorkParent extends React.Component{

    service = new BasicCaringService();
    
    constructor(props){
        super(props);
        
        this.state = {
            works: this.service.getWorkOptions(),
            selectedWorkOption: null
        }

        this.onChange.bind(this);
    }

    onChange(code){
        this.setState({
            selectedWorkOption: code
        });
    }

    render(){
        return (
            <React.Fragment>
                <span class="input-group-addon">
                    {
                        this.state.works.map((work)=>
                            (
                                <label class="radio-inline">
                                    <input type="radio" ref="serviceOption" onChange={()=>this.onChange(work.code)} checked={this.state.selectedWorkOption === work.code}/>
                                    <i>{work.description}</i>
                                </label>    
                            )
                        )
                    }
                </span>
                <BasicCaringWorkChild workCode={this.state.selectedWorkOption} petId={this.props.petId}/>
            </React.Fragment>
        );
    }
}

