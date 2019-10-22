import React from 'react';
import './BasicCaringWork.css';
import BasicCaringWorkParent from './BasicCaringWorkParent.js';

export default class BasicCaringWorkComponent extends React.Component{

   
    render(){
        return (
            <React.Fragment>
                <BasicCaringWorkParent petId={this.props.petId}/>
            </React.Fragment>
        );
    }
}
