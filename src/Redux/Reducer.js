const initialState = {
  currentUser: {},
  userSession: {type:1},
  allEntries: [],
  allPrescriptions: [],
  userData: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type){
    case 'LOAD_USER_SESSION':
      console.log("DDDD", action.payload);
      return {...state, userSession: action.payload}

      case 'GET_ALL_ENTRIES':
      return{...state, allEntries: action.payload}

      case 'GET_ALL_PRESCRIPTIONS':
      return{...state, allPrescriptions: action.payload}

      case 'ADD_NEW_ENTRY':
      return{...state, allEntries: [...state.allEntries, action.payload]}

      case 'ADD_NEW_PRESCRIPTION':
      return{...state, allPrescriptions: [...state.allPrescriptions, action.payload]}
      
      case 'LOAD_USER_DATA':
      console.log("DATA", action.payload);
      return {...state, userData: action.payload}

    default:
      return state
  }
}
