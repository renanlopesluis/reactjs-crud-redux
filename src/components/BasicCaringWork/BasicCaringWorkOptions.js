import React from 'react';
import { connect } from 'react-redux';
import BasicCaringService from '../../services/basicCaring.service.js';
import BasicCaringWorkOptionsList from './BasicCaringWorkOptionsList.js'
import BasicCaringWorkOptionsSublist from './BasicCaringWorkOptionsSublist.js'

class BasicCaringWorkOptions extends React.Component{
    
    constructor(props){
        super(props);
        this.loadWorks();
    }

    loadWorks = () => {
        const { dispatch } = this.props;
        dispatch({
            type: "List",
            list: new BasicCaringService().getWorkOptions()
        })
    }

    render(){
        return (
            <React.Fragment>
                <BasicCaringWorkOptionsList/>
                <BasicCaringWorkOptionsSublist/>
            </React.Fragment>
        );
    }
}

export default connect(state => ({pet: state.petReducer.pet}))(BasicCaringWorkOptions);