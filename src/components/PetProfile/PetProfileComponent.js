import React from 'react';
import './PetProfile.css';
import PetService from '../../services/pet.service.js';
import { Button } from 'reactstrap';

class PetProfileComponent extends React.Component{
    
    service = new PetService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: {}
        }
    }

    componentDidMount() {
        const { match: { params} } = this.props;
        this.loadPet(params.id);
    }

    onSave(event){;
        event.preventDefault();
        let type = this.buildType(this.refs.type.value);
        let pet = this.buildPet(this.state.pet.id, this.refs.name.value, type, this.refs.age.value);
        this.service.save(pet).then(
            response=>{
                this.refs.name.focus();
            }
        )
    }

    loadPet(id){
        this.service.get(id).then(response=>{
            this.setState({
                pet: response.data
            })
        })
    }
    
    render(){
        return (
            <div class="container">
                <h2 class="main">Pet Register</h2>
                <section>
                    <div class="container">
                        <form ref="petForm" method="post" >
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" value={this.state.pet.name}
                                    class="form-control" placeholder="name" required readOnly/>
                            </div>
                            <div class="form-group">
                                <label for="type">Type</label>
                                <input type="text" id="type" value={this.state.pet.type}
                                    class="form-control" placeholder="type" required readOnly/>
                            </div>
                            <div class="form-group">
                                <label for="name">Age</label>
                                <input type="number" id="age" value={this.state.pet.age}
                                    class="form-control" placeholder="age" readOnly required/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
export default PetProfileComponent;