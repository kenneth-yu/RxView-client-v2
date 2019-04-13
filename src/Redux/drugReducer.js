const initialState = {
  drug: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MEDS":
      return { ...state, drugs: action.payload };
    default:
      return state;
  }
}
