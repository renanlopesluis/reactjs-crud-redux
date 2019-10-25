import React from 'react';
import { connect } from 'react-redux';
import './BasicCaringWork.css';
import BasicCaringWorkOptions from './BasicCaringWorkOptions.js';

const BasicCaringWork = ({pet}) =>(
    <React.Fragment>
        <BasicCaringWorkOptions/>
    </React.Fragment>
);

export default connect(state =>  ({pet: state.petReducer.pet}))(BasicCaringWork);