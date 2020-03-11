import React from 'react';
import logo from './imagenes/ham.jpg';
import './Navbar.css';


class Navbar extends React.Component{
    render(){
      return <div className="Navbar">
          <div className="container-fluid">    
  <a  className="Navbar__brand" href="/">
      <img  className="Navbar__brand-logo" src={logo} alt="logo"/>
      <span className="font-weight-light">Burger</span>
      <span className="font-weight-bold">Queen</span>  
  </a>
  </div>
      </div>;
    }
  }
  
  export default Navbar;