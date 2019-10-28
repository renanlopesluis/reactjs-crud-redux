import React from 'react';
import { connect } from 'react-redux';
import PetTypeOptions from './PetTypeOptions.js';
import PetTypeService from '../../services/petType.service';

class PetType extends React.Component{    
    
    service = new PetTypeService();

    constructor(props){
        super(props);
        this.loadTypes();
    }
    
    loadTypes(){
        const { dispatch } = this.props;
        this.service.list()
        .then(
            (response)=>response.json())
            .then((types) => {
            return dispatch({
                type: "List",
                list: types, 
                petType: types[0]
            });
        })
    }

    render(){
        return (
            <React.Fragment>
                <div class="form-group">
                    <label for="type">Type</label>
                    <PetTypeOptions/>
                </div>              
            </React.Fragment>
        );
    }
}
export default connect(state => ({type: state.petTypeReducer.petType}))(PetType);
