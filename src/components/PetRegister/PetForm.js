import React from 'react';
import PetType from "./PetType.js";
import PetService from '../../services/pet.service.js';
import PetBuilder from "../../builder/PetBuilder.js";
import { Button } from 'reactstrap';

export default class PetForm extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: PetBuilder.build(null, null, {}, null),
            petType: {},
            types: []
        }
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    onSave = (event) => {
        event.preventDefault();
        let pet = PetBuilder.build(null, this.refs.name.value, this.state.petType, this.refs.age.value);
        this.service.save(pet).then(
            response=>{
                this.refs.name.focus();
            }
        )
    }
    
   onUpdatePetType = (newType) => {
       this.setState({
        petType: newType
       })
   }
    
    render(){
        return (
            <React.Fragment>
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
                                <PetType updatePetType={this.onUpdatePetType}/>
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
            </React.Fragment>
        );
    }
}