import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateSt, updateZip } from '../../ducks/reducer'


class Step_1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
  }

  // componentDidMount(){
  //   if(this.props.image.length) {
  //     this.setState({
  //       name: this.props.name,
  //       address: this.props.address,
  //       city: this.props.city,
  //       state: this.props.st,
  //       zip: this.props.zip
  //     })
  //   }
  // }

  handleCancel(){
    this.props.history.push('/')
  }

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  
  // handleNext(){
    
  //     const { updateAddress, updateCity, updateSt, updateZip } = this.props
  //     const { name, address, city, state, zip } = this.state
  //     this.props.updateName(name);
  //     updateAddress(address);
  //     updateCity(city);
  //     updateSt(state);
  //     updateZip(zip);
  //     this.props.history.push('/wizard/step2')
  //     console.log(this.props)
  //   }
    
    
    render() { 
    const { updateName, updateAddress, updateCity, updateSt, updateZip } = this.props

    console.log(this.props)
    
    return ( 
      <div>
        <h3>Property Name</h3>
          <div>
            <input 
                id="name"
                type="text"
                // value={this.state.name}
                onChange={(e) => updateName(e.target.value)}
            />

            <h3>Address</h3>
            <input 
              id='address'
              type="text"
              // value={this.state.address} 
              onChange={(e) => updateAddress(e.target.value)} 
            />
            
            <h3>City</h3>
            <input 
              id='city'
              type="text"
              // value={this.state.city} 
              onChange={(e) => updateCity(e.target.value)} 
            />

            <h3>State</h3>
            <input 
              id='state'
              type="text"
              // value={this.state.state} 
              onChange={(e) => updateSt(e.target.value)} 
            />

            <h3>Zip</h3>
            <input 
              id='zip'
              type="text"
              // value={this.state.zip} 
              onChange={(e) => updateZip(e.target.value)} 
            />
        </div>  

        <button onClick={() => this.props.history.push('/wizard/step2') }>Next Step</button>    
      </div>
     );
  }
}
 
function mapStateToProps(state) {
  const { name, address, city, st, zip, image } = state

  return {
    name,
    address,
    city,
    st,
    zip,
    image
  }

}



export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateSt, updateZip })(Step_1);