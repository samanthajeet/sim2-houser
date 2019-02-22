import React, {Component} from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'
import { updateMonthlyMortgage, updateDesiredMortgage} from '../../ducks/reducer';

class Step3 extends Component {
  constructor(){
    super()
    this.state = {
      monthlyMortgage: 0,
      desiredMortage: 0
    }
  }

  createHouse(){
    // this.props.updateMonthlyMortgage(this.state.monthlyMortgage);
    // this.props.desired(this.state.desiredMortage);
    const { name, address, city, st, zip, image, monthly_mortgage} = this.props
    Axios.post('/api/houses', {
      property_name: name,
      address,
      city,
      st,
      zip,
      image,
      monthly_mortgage
     }).then( res => {
       this.props.history.push('/')
     })
  }

  goBack(){
    this.props.history.push('/wizard/step2') 
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

        <h3>Monrthly Mortage Amount</h3>
        <input 
          // value={this.state.monthlyMortgage}
          onChange={ (e) => this.props.updateMonthlyMortgage(e.target.value) }
        />

        <h3>Desire Monthly Rent</h3>
        <input 
          // value={this.state.desired}
          onChange={ (e) => this.props.updateDesiredMortgage(e.target.value)}
        />


        <button onClick={()=> this.goBack()} >Back</button>
        <button onClick={() => this.createHouse()} >Complete</button> 

      </div>
     );
  }
}

function mapStateToProps(state){
  const { name, address, city, st, zip , image, monthlyMortgage, desiredMortage } = state

  return {
    name,
    address,
    city,
    st,
    zip,
    image,
    monthlyMortgage,
    desiredMortage
  }
}
 
export default connect(mapStateToProps, { updateMonthlyMortgage, updateDesiredMortgage})(Step3);