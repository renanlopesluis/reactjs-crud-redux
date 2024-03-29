import React from 'react';
import { connect } from 'react-redux';
import PetActions from './PetActions';

const PetTable = ({ filteredList }) =>(
    <div className="container">
        <h2 className="main">Pets</h2>
        <section>
            <div className="form-group">
                <table className="table">
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
    export default connect(state => ({filteredList: state.petReducer.filteredList ? state.petReducer.filteredList : []}))(PetTable)