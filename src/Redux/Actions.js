const loadUserData = (userData) => ({
  type: "LOAD_USER_DATA",
  payload: userData
})

// export const loadUserSession = (userSession) => ({
//   type: "LOAD_USER_SESSION",
//   payload: userSession
// })

export const loadUser = userSession => {
  return dispatch => {
    // dispatch(loadUserSession(userSession))
    if (userSession.isUserSignedIn()) {
      dispatch(loadUserData(userSession.loadUserData()))
    }
  }
}
