import './App.css';
import {Button, Almuerzos} from './button.js';
import {Desayunos , Comidas} from './Desayuno.js';
import Home from './home.js';
import Order from './order.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  return (
    <Router>
     <Link to="/Home" className="text-white "><Home/></Link>
      <div className="container mt-4">
        <div className="row ml-2"> 
        
          <Link to="/almuerzos" className="text-white "><Almuerzos/></Link>
          <Link to="/pedidos" className="text-white "><Button/></Link>
          </div>
              
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      
      <Switch>
          <Route path="/Home">
          </Route>  

          <Route path="/pedidos">
          <Desayunos/>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <Order/>
          </Route>
        
          <Route path="/almuerzos">s
          <Comidas/>
          <Order/>
          </Route>
        </Switch>
      </div>
     
    </Router>
  );
}