import React, {Component} from 'react';

class Wicard extends Component {
  
      handleCancel(){
        this.props.history.push('/')
      }
      
  render() { 

    return ( 
      <div>
        <h1>Wizard</h1>
        <button onClick={() => this.handleCancel()} >Cancel</button>
      </div>
     );
  }
}
 
export default Wicard;