import React from 'react';
import './App.css';

class Form extends React.Component{

    pet = {
        name: '',
        type: ''
    }

    constructor(pros){
        super(pros);
        this.state = {
            pet: {
                name: '',
                type: ''
            },
            list: []
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    onChangeName(event){   
        let pet = this.state.pet;
        pet.name = event.target.value;
        this.setState({
            pet:pet
         });
    }

    onChangeType(event){
        let pet = this.state.pet;
        pet.type = event.target.value;
        this.setState({
           pet:pet
        });
    }

    onSave(event){
        const list = this.state.list;
        list.push(this.state.pet);
        this.setState({
            pet: {
                name: '',
                type:''
            },
            list: list
        });
    }

    onClear(event){
        this.setState({
            pet: {
                name: '',
                type:''
            },
            list: []
        });
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" name="name" placeholder="Insert a name" value={this.state.pet.name} onChange={this.onChangeName}/>
                    <input type="text" name="type" placeholder="dog, cat, bird..." value={this.state.pet.type} onChange={this.onChangeType}/>
                    <button type="button" onClick={this.onSave}>Save</button>
                    <button type="button" onClick={this.onClear}>Clear List</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                               this.state.list.map((pet, index)=>
                                    (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{pet.name}</td>
                                            <td>{pet.type}</td>
                                        </tr>
                                    )
                                )
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Form;