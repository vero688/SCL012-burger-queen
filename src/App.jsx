import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"; // Importamos los componentes de la libreria con los que haremos el router
import {BreakfastMenu, LunchMenu} from './data-fire.jsx'; // Componentes que nos mostraran la data de firebase 
import {BreakfastButton,LunchButton} from './button.jsx'; //  Botones que muestran datos de firebase

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <div className="row ml-4">
          {/* Creamos la ruta y le pasamos el componente del boton que nos mostrará cada Menú  */}
        <Link to="/desayunos" className="text-white "><BreakfastButton/></Link>
        <Link to="/almuerzos" className="text-white "><LunchButton/></Link>
          
          </div>
          {/* Le decimos el componente que tiene que mostrar por cada ruta */}
          <Route path="/almuerzos">
          <LunchMenu/>
          </Route>

          <Route path="/desayunos">
          <BreakfastMenu/>
          </Route>

      </div>
     
    </Router>
  )
}