import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetRegister from './components/PetRegister/PetRegisterComponent.js'
import PetProfile from './components/PetProfile/PetProfileComponent.js'
import PetList from './components/PetList/PetListComponent.js'

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar" href="/">
            <img src={require('./assets/images/dog.svg')} />
                Paw Shop - PetStore 
            <img src={require('./assets/images/cat.svg')}/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="/"> Register </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/list">Pets</a>
                  </li>
              </ul>
          </div>
        </nav>
     </div>
     <div>
     <Router>
       <Switch>
         <Route exact path="/" component={PetRegister}/>
         <Route path="/list" component={PetList}/>
         <Route name="edition" path="/pet/:id" component={PetProfile}/>
       </Switch>
     </Router>
     </div>
    </div>
  );
}

export default App;
