import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetRegister from './components/PetRegister/PetRegisterComponent.js'
import PetProfile from './components/PetProfile/PetProfileComponent.js'
import PetList from './components/PetList/PetListComponent.js'

class AppRoutingComponent extends React.Component{
    
   render(){
    return (
        <div>
         <Router>
           <Switch>
             <Route exact path="/" component={PetRegister}/>
             <Route path="/list" component={PetList}/>
             <Route name="edition" path="/pet/:id" component={PetProfile}/>
           </Switch>
         </Router>
        </div>
      );
   }
}
export default AppRoutingComponent;