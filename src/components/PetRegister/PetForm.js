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
        <div className="container">
            <h2 className="main">Pet Register</h2>
            <section>
                <div className="container">
                    <form name="petForm" method="post" >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name"
                                className="form-control" placeholder="name" required/>
                        </div>
                        <PetType />
                        <div className="form-group">
                            <label htmlFor="name">Age</label>
                            <input type="number" id="age" className="form-control" 
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