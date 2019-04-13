const initialState = {
  currentUser: {},
  userSession: {type:1}
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'LOAD_USER_SESSION':
      console.log("DDDD", action.payload);
      return {...state, userSession: action.payload}
    default:
      return state
  }
}
