import React from 'react';

function House(props){
  
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      
      <button onClick={() => props.deleteHouseFn(props.property_id)} >Delete</button>
    
    </div>
  )
}

export default House;