import React from 'react';
import './PetRegister.css';
import PetService from '../../services/pet.service.js';
import PetTypeService from '../../services/petType.service.js';
import PetBuilder from "../../builder/PetBuilder.js";
import PetTypeBuilder from "../../builder/PetTypeBuilder.js";
import Menu from '../Menu/Menu.component.js';
import { Button } from 'reactstrap';

class PetRegisterComponent extends React.Component{
    
    service = new PetService();
    petTypeService = new PetTypeService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: PetBuilder.build(null, null, {}, null),
            types: []
        }
        this.loadTypes();
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    onSave(event){;
        event.preventDefault();
        let pet = PetBuilder.build(null, this.refs.name.value, PetTypeBuilder.build(this.refs.type.value, this.refs.type.label), this.refs.age.value);
        this.service.save(pet).then(
            response=>{
                this.refs.name.focus();
            }
        )
    }
    
    loadTypes(){
        this.petTypeService.list().then((response)=>response.json())
        .then((types) => {
            this.setState({
                types: types
            });
        });
    }
    
    render(){
        return (
            <div>
                <Menu/>
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
                                    <select class="form-control" name="type" ref="type" required>
                                    {
                                        this.state.types.map((type)=>
                                            (
                                                <option value={type.id}>{type.description}</option>
                                            )
                                        )
                                    }
                                    </select> 
                                </div>
                                <div class="form-group">
                                    <label for="name">Age</label>
                                    <input type="number" id="age" ref="age"
                                        class="form-control" placeholder="age"
                                        required/>
                                </div>
                                <Button color="primary" onClick={this.onSave.bind(this)}>Save</Button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default PetRegisterComponent;