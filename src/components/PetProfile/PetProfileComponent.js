import React from 'react';
import { connect } from 'react-redux';
import './PetProfile.css';
import PetInfo from './PetInfo.js';
import PetService from '../../services/pet.service.js';
import BasicCaringWork from '../BasicCaringWork/BasicCaringWork.js';
import Menu from '../Menu/Menu.component.js';

class PetProfileComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            pet: {},
        }
    }

    componentDidMount() {
        const { match: { params} } = this.props;
        this.loadPet(params.id);
    }

    loadPet(id){
        const { dispatch } = this.props;
        new PetService().get(id)
        .then(pet=>{
            dispatch({
                type: "Get",
                pet: pet.data
            })
        }).catch(
            error=>{
                dispatch({
                    type: "Failure",
                    error: "Error"
                })
            }
        );
    }
    
    render(){
        return (
            <React.Fragment>
                <Menu/>
                <div className="container">
                    <h2 className="main">Pet Profile</h2>
                    <section>
                        <div className="container">
                            <form ref="petForm">
                               <PetInfo/>
                               <BasicCaringWork/>
                            </form>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(state => state.petReducer.pet)(PetProfileComponent);