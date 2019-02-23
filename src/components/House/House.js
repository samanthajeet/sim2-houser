import React from 'react';

function House(props){
  
  return (
    <div style={{"display": "flex", "justifyContent": "space-around", "alignItems": "center", "padding": 5, "margin": 5, "border": "2px solid #1378B0", "width": "50vw" }} >
      <div>
        <img style={{"width": 250}} src={props.image} alt={props.name} />
      </div  >
      <div style={{ "textAlign": "left"}} >
        <p>Property Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
      </div>
        <button onClick={() => props.deleteHouseFn(props.property_id)} >Delete</button>
    
    </div>
  )
}

export default House;