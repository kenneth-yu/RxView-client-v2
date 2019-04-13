const initialState = {
  currentUser: {},
  userSession: { type: 1 },
  drugs: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_USER_SESSION":
      console.log("DDDD", action.payload);
      return { ...state, userSession: action.payload };
    case "SET_MEDS":
      return { ...state, drugs: action.payload };
    default:
      return state;
  }
}
