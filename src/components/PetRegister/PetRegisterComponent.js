import React from 'react';
import './PetRegister.css';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetRegisterComponent extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: this.buildPet(null, null, {}, null),
            list: []
        }
 
        this.list();
        this.onSave = this.onSave.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    onSave(event){;
        event.preventDefault();
        let type = this.buildType(this.refs.type.value);
        let pet = this.buildPet(null, this.refs.name.value, type, this.refs.age.value);
        this.service.save(pet).then(
            response=>{
                this.refs.name.focus();
                this.list();
            }
        )
    }

    onRemove(id){
        this.service.remove(id).then(
            response=>{
                this.list();
            }
        );
    }

    buildPet(id, name, type, age){
        return  {
            id: id,
            name: name,
            type: type,
            age: age
        }
    }
    buildType(id){
        return  {
            id: id,
            description: this.getTypeDescription(id)
        }
    }

    getTypeDescription(id){
        switch(id){
            case '1': return 'Bird';
            case '2': return 'Cat';
            case '3': return 'Dog';
        }
    }

    list(){
        this.service.list().then((response)=>response.json())
        .then((responseJson) => {
            this.setState({
                pet: this.buildPet(null, null, {}, null),
                list: responseJson
            })
        });
    }
    
    render(){
        return (
            <div class="container">
                <h2 class="main">Pet Register</h2>
                <section>
                    <div class="container">
                        <form ref="petForm" method="post" >
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" ref="name"
                                    class="form-control" placeholder="name" required/>
                            </div>
                            <div class="form-group">
                                <label for="type">Type</label>
                                <select class="form-control" required ref="type" required>
                                    <option value="1">Bird</option>
                                    <option value="2">Cat</option>
                                    <option value="3">Dog</option>
                                </select> 
                            </div>
                            <div class="form-group">
                                <label for="name">Age</label>
                                <input type="number" id="age" ref="age"
                                    class="form-control" placeholder="age"
                                    required/>
                            </div>
                            <Button color="primary" onClick={this.onSave}>Save</Button>
                        </form>
                    </div>
                    <br />
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
export default PetRegisterComponent;