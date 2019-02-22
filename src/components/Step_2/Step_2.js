import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer'


class Step2 extends Component {
  constructor(){
    super()
    this.state = {
      image: ''
    }
  }

  componentDidMount(){
    if(this.props.image.length) {
      this.setState({
        image: this.props.image
      })
    }
  }

  handleImage(value){
    this.setState({
      image: value
    })
  }

  onNext(){
    this.props.updateImage(this.state.image)
    this.props.history.push('/wizard/step3')
  }
  
  render() { 
    console.log(this.props)
    return ( 
      <div>

        <h3>Image Urls</h3>
        <input 
          value={this.state.image}
          onChange={ (e) => this.handleImage(e.target.value)}
        />


        <button onClick={()=> this.props.history.push('/wizard/step1') } >Back</button>
        <button onClick={()=> this.onNext() } >Next Step</button> 



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

export default connect(mapStateToProps, { updateImage })(Step2);