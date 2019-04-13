export const loadUserSession = userSession => ({
  type: "LOAD_USER_SESSION",
  payload: userSession
});

export const setMeds = meds => ({
  type: "SET_MEDS",
  payload: meds
});

export const getTheMeds = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/drugs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(setMeds(res));
      });
  };
};
//
// export const getTheMeds = () => dispatch => {
//   return fetch("http://localhost:3000//api/v1/drugs")
//     .then(r => r.json())
//     .then(res => console.log(res));
// };
