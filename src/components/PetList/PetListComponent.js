import React from 'react';
import { connect } from 'react-redux';
import './PetList.css';
import Menu from '../Menu/Menu.component.js';
import PetSearch from './PetSearch.js';
import PetTable from './PetTable.js'
import PetService from '../../services/pet.service.js';

class PetListComponent extends React.Component{ 

    constructor(props){
        super(props); 
        this.list();
    }

    list = () =>{
        const { dispatch } = this.props;
        new PetService().list().then((response)=>response.json())
        .then((pets) => {
            dispatch({
                type: "List",
                list: pets,
                filteredList: pets
            })
        });
    }

    render(){
        return (
            <React.Fragment>
                <Menu/>
                <PetSearch />
                <PetTable  />
            </React.Fragment>
        );
    }
}

export default connect(state => state.petReducer.list)(PetListComponent);