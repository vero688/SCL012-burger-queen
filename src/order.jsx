import React, {Component} from 'react';

// Componente que contiene la caja donde iran los pedidos 
class Order extends Component {
  render(){
    return(
         
      <div className="card">
      <h5 className="card-header bg-secondary text-white"> Yo soy el pedido de la Mesa: </h5>
      <div className="card-body">
        <h5 className="card-title"> Comidas </h5>
        <a href="Kitchen" class="btn bg-warning"> Enviar a la Cocina! </a>
      </div>;
    </div>      
    );
  }
}
export default Order;