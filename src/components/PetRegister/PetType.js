import React from 'react';
import PetTypeService from '../../services/petType.service.js';
import PetTypeBuilder from "../../builder/PetTypeBuilder.js";

export default class PetType extends React.Component{

    service = new PetTypeService();
    
    constructor(props){
        super(props);
        this.state = {
            types: []
        }
        this.loadTypes();
        this.onChange = this.onChange.bind(this);
    }
    
    loadTypes(){
        this.service.list().then((response)=>response.json())
        .then((types) => {
            this.setState({
                types: types
            });
            this.props.updatePetType(this.state.types[0]);
        });
    }

    onChange(){
        this.props.updatePetType(PetTypeBuilder.build(this.refs.type.value));
    }
    
    render(){
        return (
            <React.Fragment>
                <div class="form-group">
                    <label for="type">Type</label>
                    <select class="form-control" name="type" ref="type" onChange={this.onChange} required>
                    {
                        this.state.types.map((type)=>
                            (
                                <option value={type.id}>{type.description}</option>
                            )
                        )
                    }
                    </select> 
                </div>              
            </React.Fragment>
        );
    }
}