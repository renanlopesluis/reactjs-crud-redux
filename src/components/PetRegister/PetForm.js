import React from 'react';
import { connect } from 'react-redux';
import PetBuilder from '../../builder/PetBuilder';
import PetType from "./PetType.js";
import PetService from '../../services/pet.service.js';
      
function onSave (event, petType) {
    event.preventDefault();
    const form = document.forms.petForm;
    const pet = PetBuilder.build(null, form.name.value, petType, form.age.value);
    new PetService().save(pet).then(
        response=>{
           alert("pet has been saved!");
        }
    )
}

const PetForm = ({petType, dispatch}) => (
    <React.Fragment>
        <div class="container">
            <h2 class="main">Pet Register</h2>
            <section>
                <div class="container">
                    <form name="petForm" method="post" >
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name"
                                class="form-control" placeholder="name" required/>
                        </div>
                        <PetType />
                        <div class="form-group">
                            <label for="name">Age</label>
                            <input type="number" id="age" class="form-control" 
                                placeholder="age" required/>
                        </div>
                        <button color="primary" onClick={(event) => onSave(event, petType)}>Save</button>
                    </form>
                </div>
            </section>
        </div>
    </React.Fragment>
)

export default connect(state => ({pet: state.petReducer.pet, petType: state.petTypeReducer.petType}))(PetForm);