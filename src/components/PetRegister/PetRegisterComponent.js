import React from 'react';
import './PetRegister.css';
import PetForm from './PetForm.js'
import Menu from '../Menu/Menu.component.js';

class PetRegisterComponent extends React.Component{
       
    render(){
        return (
            <React.Fragment>
                <Menu/>
                <PetForm/>
            </React.Fragment>
        );
    }
}
export default PetRegisterComponent;