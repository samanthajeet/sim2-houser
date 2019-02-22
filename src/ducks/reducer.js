import { defaultCipherList } from "constants";

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

export default function reducer(state=initialState, action) {
  switch (action.type) {
    

    default:
      return state
  }

}