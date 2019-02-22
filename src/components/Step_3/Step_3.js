import React, {Component} from 'react';
import Axios from 'axios';

class Step3 extends Component {
  constructor(){
    super()
    this.state = {
      monthlyMortgage: 0,
      desiredMortage: 0
    }
  }

  createHouse(){
    const { name, address, city, state, zip} = this.state
    Axios.post('/api/houses', {
      property_name: name,
      address,
      city,
      state,
      zip
     }).then( res => {
       this.props.history.push('/')
     })
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  render() { 
    return ( 
      <div>

        <h3>Monrthly Mortage Amount</h3>
        <input 
          value={this.state.monthlyMortgage}
          onChange={ this.handleInput}
        />

        <h3>Desire Monthly Rent</h3>
        <input 
          value={this.state.desired}
          onChange={ this.handleInput}
        />


        <button>Previos Step</button>
        <button>Next Step</button>


        <button onClick={() => this.createHouse()} >Complete</button>
      </div>
     );
  }
}
 
export default Step3;