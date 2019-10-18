import React from 'react';
import './PetList.css';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetListComponent extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pets: [],
            search: ''
        }
 
        this.list();
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(id){
        this.service.remove(id).then(
            response=>{
                this.list();
            }
        );
    }

    list(){
        this.service.list().then((response)=>response.json())
        .then((responseJson) => {
            this.setState({
                pets: responseJson
            })
        });
    }

    onSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }
    
    render(){
        let filteredPets = this.state.pets.filter(
            (pet) => {
                return pet && pet.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <div class="input-group">
                    <input type="text" class="form-control filter" id="filterName" name="filterName" 
                    placeholder="search pets..." onChange={this.onSearch.bind(this)} value={this.state.search}/>
                </div>
                <div class="container">
                    <h2 class="main">Pets</h2>
                    <section>
                        <div class="form-group">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Age</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    filteredPets.map((pet)=>
                                            (
                                                <tr>
                                                    <td>{pet.id}</td>
                                                    <td>{pet.name}</td>
                                                    <td>{pet.type}</td>
                                                    <td>{pet.age}</td>
                                                    <td> <Button color="danger" onClick={()=>this.onRemove(pet.id)}>Remove</Button></td>
                                                </tr>
                                            )
                                        )
                                }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default PetListComponent;