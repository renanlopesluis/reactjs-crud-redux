import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetActions extends React.Component{
 
    onRemove = () => {
        const { dispatch } = this.props;
        new PetService().remove(this.props.id).then(
            response=>{
                dispatch({
                    type: "Remove",
                    filteredList: this.props.list.filter(pet=>{
                        return pet.id !== this.props.id
                    })
                })
            }
        );
    }

    render(){
        return (
            <React.Fragment>
                <td> 
                    <Button color="danger" onClick={this.onRemove}>Remove</Button>
                    <Link to={{ pathname:'/pet/'+ this.props.id }} className="btn btn-success">Profile</Link>
                </td>
            </React.Fragment>
        );
    }
}

PetActions.propTypes = {
    id: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
}
export default connect(state => ({filteredList: state.petReducer.filteredList}))(PetActions)