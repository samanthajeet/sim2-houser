
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
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_MORTGAGE = 'UPDATE_DESIRED_MORTGAGE'
const ON_CANCEL = 'ON_CANCEL'




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
      return {...state, zip: action.payload}
    case UPDATE_IMAGE:
      return {...state, image: action.payload}
    case UPDATE_MONTHLY_MORTGAGE:
      return {...state, monthlyMortgage: action.payload }
    case UPDATE_DESIRED_MORTGAGE:
      return {...state, desiredMortage: action.payload}
    case ON_CANCEL:
      return action.payload
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

export function updateImage(image){
  return {
    type: UPDATE_IMAGE,
    payload: image
  }
}

export function updateMonthlyMortgage(amount){
  return {
    type: UPDATE_MONTHLY_MORTGAGE,
    payload: amount
  }
}

export function updateDesiredMortgage(amount){
  return {
    type: UPDATE_DESIRED_MORTGAGE,
    payload: amount
  }
}

export function onCancel() {
  return{
    type: ON_CANCEL,
    payload: initialState
  }
}