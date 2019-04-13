import React from 'react'
// import {Button} from 'react-bulma-components';

const Logout = ({userSession}) => {
  const handleClick = () => {
    userSession.signUserOut()
    console.log("signed out", userSession);
    window.location = "/"
  }

  return <button color="primary" onClick={handleClick}>Logout</button>
}

export default Logout;
