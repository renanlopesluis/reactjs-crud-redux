import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetRegister from './components/PetRegister/PetRegisterComponent.js'
import PetList from './components/PetList/PetListComponent.js'

function App() {
  return (
    <div className="App">
      <div>
      <nav class="navbar navbar-expand-lg navbarlight bg-light">
          <a class="navbar-brand" href="/">Register</a>
        </nav>
        <nav class="navbar navbar-expand-lg navbarlight bg-light">
          <a class="navbar-brand" href="/list">Pet List</a>
        </nav>
     </div>
     <div>
     <Router>
       <Switch>
         <Route exact path="/" component={PetRegister}/>
         <Route path="/list" component={PetList}/>
       </Switch>
     </Router>
     </div>
    </div>
  );
}

export default App;
