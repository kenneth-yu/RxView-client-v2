const getMeds = error => ({ type: "LOGIN_USER_ERROR", payload: error });

export const getTheMeds = token => {
  return dispatch => {
    dispatch(getMeds());
    fetch("http://localhost:3000/api/v1/miles-routes", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          dispatch(getMeds(data.error));
        } else {
          dispatch(getMeds(data.user));
        }
      })
      .catch(console.error);
  };
};
