import React from 'react';
import { connect } from 'react-redux';

function onChange(event, list, dispatch){
    let search = event.target.value ? event.target.value.substr(0,20) : undefined;
    dispatch({
        type: "Filter",
        filteredList: filterPets(list, search)
    })
}

function filterPets(list, filter){
    if (filter){
        return list.filter((pet) => { 
            return pet && pet.name.toLowerCase().indexOf(filter) !== -1
        });
    }
    return list;
    
}

const PetSearch = ({list, dispatch}) => (
    <div class="input-group">
        <input type="text" class="form-control filter" id="filterName" name="filterName" 
        placeholder="search pets..." onChange={(event) => onChange(event, list, dispatch)} />
    </div>

);

export default connect(state => ({list: state.petReducer.list}))(PetSearch)