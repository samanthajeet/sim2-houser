import React, {Component} from 'react';
import House from '../House/House';
import axios from 'axios'


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    axios.get('/api/houses').then( res => {
      this.setState({
        houses: res.data
      })
      console.log(res.data)
    })
  }



  handleNewProperty(){
    this.props.history.push('/wizard')
  }

  render() { 
    let mappedHouses = this.state.houses.map( (house, i) => {
      return (
        <div key={i}>
        <House
          key={house.property_id}
          name={house.property_name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}


        />

          
        </div>
      )
    })
    return ( 
      <div>
        <h1>Dashboard</h1>
        {mappedHouses}
        <button  onClick={()=> this.handleNewProperty()}>Add New Property</button>
      </div>
     );
  }
}
 
export default Dashboard;