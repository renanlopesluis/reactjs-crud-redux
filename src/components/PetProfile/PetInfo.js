import React from 'react';
import PropTypes from 'prop-types';

export default class PetInfo extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" value={this.props.pet.name}
                        class="form-control" placeholder="name" readOnly/>
                </div>
                <div class="form-group">
                    <label for="type">Type</label>
                    <input type="text" id="type" value={this.props.pet.type}
                        class="form-control" placeholder="type" readOnly/>
                </div>
                <div class="form-group">
                    <label for="name">Age</label>
                    <input type="number" id="age" value={this.props.pet.age}
                        class="form-control" placeholder="age" readOnly />
                </div>
            </React.Fragment>
        );
    }
}

PetInfo.propTypes = {
    pet: PropTypes.any.isRequired
}