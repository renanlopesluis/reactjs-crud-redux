import React from 'react';
import './PetProfile.css';
import PetInfo from './PetInfo.js';
import PetService from '../../services/pet.service.js';
import BasicCaringWork from '../BasicCaringWork/BasicCaringWork.js';
import Menu from '../Menu/Menu.component.js';

export default class PetProfileComponent extends React.Component{
    
    service = new PetService();
    
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
        this.service.get(id).then(response=>{
            this.setState({
                pet: response.data
            });
        });
    }
    
    render(){
        return (
            <React.Fragment>
                <Menu/>
                <div class="container">
                    <h2 class="main">Pet Profile</h2>
                    <section>
                        <div class="container">
                            <form ref="petForm" method="post" >
                               <PetInfo pet={this.state.pet}/>
                               <BasicCaringWork petId={this.state.pet.id}/>
                            </form>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}