import React from 'react';
import './PetProfile.css';
import PetService from '../../services/pet.service.js';
import BasicCaringService from '../../services/basicCaring.service.js';
import { Button } from 'reactstrap';

class PetProfileComponent extends React.Component{
    
    service = new PetService();
    basicCaringService = new BasicCaringService();
    
    constructor(pros){
        super(pros);
        this.state = {
            pet: {},
            services: this.basicCaringService.getServiceOptions(),
            basicServices: [],
            selectedServiceOption: null
        }
        this.onServiceChange.bind(this)
    }

    componentDidMount() {
        const { match: { params} } = this.props;
        this.loadPet(params.id);
    }

    onServiceChange(code){
        const basicServices = this.basicCaringService.getServices(code); 
        this.setState({
            basicServices: basicServices,
            selectedServiceOption: code
        })  
    }

    onExecuteService(){
        this.basicCaringService.executeService(this.state.selectedServiceOption, this.state.pet.id, this.refs.basicServices.value).then(
            response=>{
                if(response && response.data)
                    alert(response.data.message);
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

                            <span class="input-group-addon">
                                {
                                    this.state.services.map((service)=>
                                        (
                                            <label class="radio-inline">
                                                <input type="radio" ref="serviceOption" ref={service.code} onChange={()=>this.onServiceChange(service.code)} checked={this.state.selectedServiceOption === service.code}/>
                                                <i>{service.description}</i>
                                            </label>    
                                        )
                                    )
                                }
                            </span>
                            <div>
                                <label for="type">Service type:</label>
                                <select class="form-control" name="basicServices" ref="basicServices" required>
                                {  
                                    this.state.basicServices.map((service)=>
                                        (
                                            
                                            <option value={service.code}>{service.description}</option>
                                        
                                        )
                                    )
                                 }
                                </select>  
                                <button  type="button" class="btn btn-primary" onClick={this.onExecuteService.bind(this)}>OK</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
export default PetProfileComponent;