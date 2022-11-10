import React from 'react';
import { connect } from 'react-redux';

const PetInfo = ({pet}) =>(
    <React.Fragment>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={pet.name}
                className="form-control" placeholder="name" readOnly/>
        </div>
        <div className="form-group">
            <label htmlFor="type">Type</label>
            <input type="text" id="type" value={pet.type}
                className="form-control" placeholder="type" readOnly/>
        </div>
        <div className="form-group">
            <label htmlFor="name">Age</label>
            <input type="number" id="age" value={pet.age}
                className="form-control" placeholder="age" readOnly />
        </div>
    </React.Fragment>
);
export default connect(state =>  ({pet: state.petReducer.pet}))(PetInfo);