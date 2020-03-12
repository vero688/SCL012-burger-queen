import React, { Component } from 'react';
import db from './configFire.jsx';

// Creando componente que nos traiga la colección Menú Desayuno que tenemos en firebase
 export class BreakfastMenu extends Component {
  constructor() {
    super();
    this.state = {
      breakfastMenu: [] // Array vacío para poder más delante actualizarlo con los datos de firebase
    }}
  
  componentDidMount(){
    db.collection('MenuDesayuno').get().then((querySnapshot) => { // Entramos a los datos de firebase
      const breakfast = querySnapshot.docs.map(doc => doc.data());// Recorremos los datos
      this.setState({
        breakfastMenu: breakfast // Actualizamos el estado del array con los datos de nuestra colección
      })
    })
  }
  render(){
    return (
      <div className="col">
         {/* Hacemos un map al array con sus nuevos datos y mostramos en boton */}
        {this.state.breakfastMenu.map((item, key) =>{ 
            return (
              <div key={key} className=" row col-md-2">

                <div className="mt-4">

                <button className="btn btn-danger btn-lg" >{item.nombre}{item.precio}</button>

            </div>
              </div>
            )
          })
        }
      </div>
    )}
  }

  // Componente que nos muestra la colección Menu Almuerzo que esta en firebase

  export class LunchMenu extends Component {
    constructor(){
      super();
      this.state = {
        lunchMenu: []
      }
    }

    componentDidMount(){
      db.collection('MenuAlmuerzo').get().then((element) => {
        const lunch = element.docs.map(doc => doc.data());
        this.setState ({
          lunchMenu : lunch
        })
      })
    }
    render(){
      return (
        <div>

        {this.state.lunchMenu.map((element, key) =>{
            return (
              <div key={key} className="row-md-auto">
                <div className="mt-4">
                <button className="btn btn-success btn-lg" >{element.nombre}{element.precio}</button>

              </div>
                </div>
            ) 
          })          
        }
      </div>
      )
    }
  }