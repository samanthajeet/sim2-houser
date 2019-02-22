
let initialState = {
  name: '',
  address: '',
  city: '',
  st: '',
  zip: 0,
  image: '',
  monthlyMortgage: 0,
  desiredMortage: 0

}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_ST = 'UPDATE_ST';
const UPDATE_ZIP = 'UPDATE_ZIP'
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {...state, name: action.payload}
    case UPDATE_ADDRESS:
      return{...state, address:action.payload}
    case UPDATE_CITY:
      return {...state, city: action.payload}
    case UPDATE_ST:
      return {...state, st: action.payload}
    case UPDATE_ZIP:
      return {...action, zip: action.payload}
    
    default:
      return state
  }

}


export function updateName(name){
  return{
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateAddress(address){
  return{
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function updateCity(city){
  return{
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateSt(st){
  return{
    type: UPDATE_ST,
    payload: st
  }
}

export function updateZip(zip){
  return{
    type: UPDATE_ZIP,
    payload: zip
  }
}