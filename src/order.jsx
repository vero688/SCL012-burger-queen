import React, {Component} from 'react';
import "./order.css"

// Componente que contiene la caja donde iran los pedidos 
class Order extends Component {
  render(){
    return(
         
      <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-white">Pedido: </h5>
            <p className="card-text text-white">comida y precio .</p>
            <a href="Kitchen" id="sendToKitchen" className=" btn btn-success"> Enviar a la cocina</a>
          </div>
        </div>
      </div>
    </div>     
    );
  }
}
export default Order;