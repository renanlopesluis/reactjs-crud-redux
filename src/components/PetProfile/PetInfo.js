import React from 'react';

export default function PetInfo(props){
    return (
        <React.Fragment>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" value={props.pet.name}
                    class="form-control" placeholder="name" readOnly/>
            </div>
            <div class="form-group">
                <label for="type">Type</label>
                <input type="text" id="type" value={props.pet.type}
                    class="form-control" placeholder="type" readOnly/>
            </div>
            <div class="form-group">
                <label for="name">Age</label>
                <input type="number" id="age" value={props.pet.age}
                    class="form-control" placeholder="age" readOnly />
            </div>
        </React.Fragment>
    );
}