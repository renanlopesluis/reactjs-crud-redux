import React from 'react';
import './PetList.css';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetListComponent extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            list: []
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
                list: responseJson
            })
        });
    }
    
    render(){
        return (
            <div class="container">
                <h2 class="main">Pet List</h2>
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
                                this.state.list.map((pet, index)=>
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
        );
    }
}
export default PetListComponent;