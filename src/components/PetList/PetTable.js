import React from 'react';
import PetRemoval from './PetRemoval';

export default class PetTable extends React.Component{
    
    constructor(props){
        super(props);
    }

    filterPets = () => {
        return this.props.pets.filter(
            (pet) => {
                return pet && pet.name.toLowerCase().indexOf(this.props.search) !== -1;
            }
        );
    }
    
    render(){
        let filteredPets = this.filterPets();
        return (
            <React.Fragment>
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
                                                    <PetRemoval id={pet.id} list={this.props.list}/>
                                                </tr>
                                            )
                                        )
                                }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}