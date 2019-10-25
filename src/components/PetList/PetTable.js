import React from 'react';
import { connect } from 'react-redux';
import PetActions from './PetActions';

const PetTable = ({ filteredList }) =>(

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
                        filteredList.map((pet)=>
                                (
                                    <tr>
                                        <td>{pet.id}</td>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>{pet.age}</td>
                                        <PetActions id={pet.id} list={filteredList}/>
                                    </tr>
                                )
                            )
                    }
                    </tbody>
                </table>
            </div>
        </section>
    </div>
    );
    export default connect(state => ({filteredList: state.petReducer.filteredList}))(PetTable)