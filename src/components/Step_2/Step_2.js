import React, {Component} from 'react';

class Step2 extends Component {
  constructor(){
    super()
    this.state = {
      image: ''
    }
  }

  handleImage(value){
    this.setState({
      image: value
    })
  }
  
  render() { 
    return ( 
      <div>

        <h3>Image Urls</h3>
        <input 
          value={this.state.image}
          onChange={ (e) => this.handleImage(e.target.value)}
        />


        <button onClick={()=> this.props.history.push('/wizard/step1') } >Next Step</button>
        <button onClick={()=> this.props.history.push('/wizard/step3') } >Next Step</button> 



      </div>
     );
  }
}
 
export default Step2;