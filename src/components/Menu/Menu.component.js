import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default class MenuComponent extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar" href="/">
                        <img alt="" src={require('../../assets/images/dog.svg')} />
                            Paw Shop - PetStore 
                        <img alt="" src={require('../../assets/images/cat.svg')}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={{ pathname: '/'}} className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{ pathname: '/list'}} className="nav-link">Pets</Link>
                                </li>
                            </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}