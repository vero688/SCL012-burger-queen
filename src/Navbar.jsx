import React from 'react';
import logo from './imagenes/ham.jpg';
import './Navbar.css';
import Home from './Home'


class Navbar extends React.Component{
    render(){
      return <div className="Navbar">
          <div className="container-fluid">    
  <a  className="Navbar__brand" href="/">
      <img  className="Navbar__brand-logo" src={logo} alt="logo"/>
      <span className="font-weight-light">Burger</span>
      <span className="font-weight-bold">Queen</span>  
      <hr></hr>
<<<<<<< HEAD
=======
      
>>>>>>> c06d026b9c19c83bf719207ab530b50d7c928c42
  </a>
  <Home/>
  </div>
      </div>;
    }
  }
  
  export default Navbar;