import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

export default class PetRemoval extends React.Component{
    
    service = new PetService();

    onRemove = () => {
        this.service.remove(this.props.id).then(
            response=>{
                this.props.list();
            }
        );
    }

    render(){
        return (
            <React.Fragment>
                <td> 
                    <Button color="danger" onClick={this.onRemove}>Remove</Button>
                    <Link to={{ pathname:'/pet/'+ this.props.id }} class="btn btn-success">Profile</Link>
                </td>
            </React.Fragment>
        );
    }
}

PetRemoval.propTypes = {
    id: PropTypes.number.isRequired,
    list: PropTypes.func
}