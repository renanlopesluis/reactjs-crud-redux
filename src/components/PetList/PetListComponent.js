import React from 'react';
import './PetList.css';
import PetSearch from './PetSearch.js';
import PetTable from './PetTable.js'
import PetService from '../../services/pet.service.js';
import Menu from '../Menu/Menu.component.js';

export default class PetListComponent extends React.Component{
    
    service = new PetService();

    constructor(pros){
        super(pros);
        this.state = {
            pets: [],
            search:''
        }
 
        this.list();
    }

    list = () =>{
        this.service.list().then((response)=>response.json())
        .then((pets) => {
            this.setState({
                pets: pets
            })
        });
    }
    
    updateSearch = (newSearch)=>{
        this.setState({
            search: newSearch
        })
    }

    render(){
        return (
            <React.Fragment>
                <Menu/>
                <PetSearch updateSearch={this.updateSearch}/>
                <PetTable pets={this.state.pets} search={this.state.search} list={this.list}/>
            </React.Fragment>
        );
    }
}