import React from 'react';
import { connect } from 'react-redux';
import PetTypeBuilder from '../../builder/PetTypeBuilder';

function onChange(event) {
    return {type:"SelectPetType", petType: PetTypeBuilder.build(event.target.value)}
}

const PetTypeOptions = ({list, dispatch}) => (
    <select class="form-control" name="type" onChange={(event) => dispatch(onChange(event))} required>
    {
        list.map((type)=>
            (
                <option value={type.id}>{type.description}</option>
            )
        )
    }
    </select> 
);

export default connect(state => ({list: state.petTypeReducer.list}))(PetTypeOptions);