const initialState = {
  currentUser: {},
  userData: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'LOAD_USER_DATA':
      console.log("DATA", action.payload);
      return {...state, userData: action.payload}
    default:
      return state
  }
}
