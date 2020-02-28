import React from 'react';
import './App.css';
import hamburgesa from '../src/imagenes/830aa5f2008eff989e43d31ff30b7da7.jpg';
import Button from './components/navegation.js';


function App() {
  return (
    <div className="Log">
    <img src={hamburgesa} alt="logo"/>
  
    <div className='App'>
      <Button />
  </div>
  </div>
  );
}

export default App;
