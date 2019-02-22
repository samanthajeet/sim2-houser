import React, {Component} from 'react';
import { connect } from 'react-redux'


class Step_1 extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
  }


  
  handleCancel(){
    this.props.history.push('/')
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  render() { 
    console.log(this.props)


    return ( 
      <div>
        <h1>Wizard</h1>
        <h3>Property Name</h3>
        <input 
            id="name"
            type="text"
            value={this.state.name}
            onChange={ this.handleInput}
        />

        <h3>Address</h3>
        <input 
          id='address'
          type="text"
          value={this.state.address} 
          onChange={this.handleInput} 
        />
        
        <h3>City</h3>
        <input 
          id='city'
          type="text"
          value={this.state.city} 
          onChange={this.handleInput} 
        />

        <h3>State</h3>
        <input 
          id='state'
          type="text"
          value={this.state.state} 
          onChange={this.handleInput} 
        />

        <h3>Zip</h3>
        <input 
          id='zip'
          type="text"
          value={this.state.zip} 
          onChange={this.handleInput} 
        />



        <button onClick={()=> this.props.history.push('/wizard/step2') } >Next Step</button>    
      </div>
     );
  }
}
 
function mapStateToProps(state) {
  const { name, address, city, st, zip } = state

  return {
    name,
    address,
    city,
    st,
    zip
  }

}



export default connect(mapStateToProps)(Step_1);