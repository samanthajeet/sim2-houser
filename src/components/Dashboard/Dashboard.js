import React, {Component} from 'react';
import House from '../House/House';


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      houses: {}
    }
  }


  handleNewProperty(){
    this.props.history.push('/wizard')
  }

  render() { 
    const mappedHouses = this.state.map( house => house )
    return ( 
      <div>
        <h1>Dashboard</h1>
        {mappedHouses}
        <House />
        <button  onClick={()=> this.handleNewProperty()}>Add New Property</button>
      </div>
     );
  }
}
 
export default Dashboard;