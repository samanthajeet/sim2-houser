import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Step1 from '../Step_1/Step_1'
import Step2 from '../Step_2/Step_2'
import Step3 from '../Step_3/Step_3'


class Wizard extends Component {
  
  
  handleCancel(){
    this.props.history.push('/')
  }


  render() { 

    return ( 
      <div>
        <h1>Wizard</h1>
        <Switch>
          <Route  path="/wizard/step1" component={Step1}  />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </Switch>

        <button onClick={() => this.handleCancel()} >Cancel</button>
      </div>
     );
  }
}
 
export default Wizard;