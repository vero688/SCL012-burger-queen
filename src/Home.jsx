import React, { Component } from 'react';

// Botones del home
class Home extends Component {
 render() {
    return(
      <div className="Home">
        <button  type="button" className="btn btn-success btn-lg text-white"> Cocina</button>
      
        <div> <h1>
           {this.props.firstName} <br/> {this.props.lastName}
                     </h1></div>
        
    </div>
    
    );
  }
}
export default Home;