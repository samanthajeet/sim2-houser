import React, {Component} from 'react';
import House from '../House/House';
import axios from 'axios';
import './Dashboard.css'


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      houses: []
    }

    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount(){
    axios.get('/api/houses').then( res => {
      this.setState({
        houses: res.data
      })
      console.log(res.data)
    })
  }

  deleteHouse(property_id){
    axios.delete(`/api/houses/${property_id}`).then( res => {
      this.setState({
        houses: res.data
      })
      console.log(property_id)
    })

  }



  handleNewProperty(){
    this.props.history.push('/wizard/step1')
  }

  render() { 
    let mappedHouses = this.state.houses.map( (house, i) => {
      return (
        <div key={i}>
        <House
          key={i}
          property_id={house.property_id}
          name={house.property_name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}
          image={house.image}
          deleteHouseFn={this.deleteHouse}
        />
        </div>
      )
    })
    return ( 
      <div>
        <button  onClick={()=> this.handleNewProperty()}>Add New Property</button>
        {mappedHouses}
      </div>
     );
  }
}
 
export default Dashboard;