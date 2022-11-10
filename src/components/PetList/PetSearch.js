import React from 'react';
import { connect } from 'react-redux';

function onChange(event, list, dispatch){
    const search = event.target.value.toLowerCase();
    dispatch({
        type: "Filter",
        filteredList: filterPets(list, search)
    })
}

function filterPets(list, filter){
    if (filter){
        return list.filter((pet) => { 
            return pet && pet.name.toLowerCase().includes(filter)
        });
    }
    return list;
    
}

const PetSearch = ({list, dispatch}) => (
    <div className="input-group">
        <input type="text" className="form-control filter" id="filterName" name="filterName" 
        placeholder="search pets..." onChange={(event) => onChange(event, list, dispatch)} />
    </div>

);

export default connect(state => ({list: state.petReducer.list}))(PetSearch)