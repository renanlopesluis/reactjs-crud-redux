import React from 'react';
import './PetRegister.css';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetRegisterComponent extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: this.buildPet(null, null, {}, null)
        }
 
        this.onSave = this.onSave.bind(this);
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
                </section>
            </div>
        );
    }
}
export default PetRegisterComponent;