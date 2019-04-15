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

const loadUserData = userData => ({
  type: "LOAD_USER_DATA",
  payload: userData
});

export function getEntries() {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/entry`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "GET_ALL_ENTRIES", payload: data }));
  };
}

export function getPrescriptions() {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/rx`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "GET_ALL_PRESCRIPTIONS", payload: data }));
  };
}

export function addNewEntry(comments, date) {
  return dispatch => {
    let entry = { content: comments, date: date };
    if (comments && date) {
      return fetch(`http://localhost:3000/api/v1/entry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ entry })
      })
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "POST_NEW_ENTRY", payload: data });
          window.alert("Entry Added Successfully!");
        });
    } else {
      window.alert("Please fill in ALL fields!");
    }
  };
}

export function addNewPrescription(dosage, user_id, drug_id) {
  return dispatch => {
    let rx = { dosage: dosage, user_id: user_id, drug_id: drug_id };
    if (dosage && drug_id && user_id) {
      return fetch(`http://localhost:3000/api/v1/rx`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ rx })
      })
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "POST_NEW_PRESCRIPTION", payload: data });
          window.alert("Prescription Added Successfully!");
        });
    } else {
    }
  };
}

// export const loadUserSession = (userSession) => ({
//   type: "LOAD_USER_SESSION",
//   payload: userSession
// })

export const loadUser = userSession => {
  return dispatch => {
    // dispatch(loadUserSession(userSession))
    if (userSession.isUserSignedIn()) {
      dispatch(loadUserData(userSession.loadUserData()));
    }
  };
};
