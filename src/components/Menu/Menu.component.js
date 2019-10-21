import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

class MenuComponent extends React.Component{
    
    render(){
        return <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar" href="/">
            <img src={require('../../assets/images/dog.svg')} />
                Paw Shop - PetStore 
            <img src={require('../../assets/images/cat.svg')}/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to={{ pathname: '/'}} class="nav-link">Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={{ pathname: '/list'}} class="nav-link">Pets</Link>
                    </li>
                </ul>
            
          </div>
        </nav>
     </div>
    }
}
export default MenuComponent;