import React from 'react';
import { connect } from 'react-redux';

const PetInfo = ({pet}) =>(
    <React.Fragment>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" value={pet.name}
                class="form-control" placeholder="name" readOnly/>
        </div>
        <div class="form-group">
            <label for="type">Type</label>
            <input type="text" id="type" value={pet.type}
                class="form-control" placeholder="type" readOnly/>
        </div>
        <div class="form-group">
            <label for="name">Age</label>
            <input type="number" id="age" value={pet.age}
                class="form-control" placeholder="age" readOnly />
        </div>
    </React.Fragment>
);
export default connect(state =>  ({pet: state.petReducer.pet}))(PetInfo);