import React, {Component} from 'react';
import House from '../House/House';


class Dashboard extends Component {


  handleNewProperty(){
    this.props.history.push('/wizard')
  }

  render() { 
    return ( 
      <div>
        <h1>Dashboard</h1>
        <House />
        <button  onClick={()=> this.handleNewProperty()}>Add New Property</button>
      </div>
     );
  }
}
 
export default Dashboard;