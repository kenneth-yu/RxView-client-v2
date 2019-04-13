import React from 'react'
// import {Button, Card, Content} from 'react-bulma-components';

const Login = ({userSession}) => {
  const handleClick = () => {
    console.log("signing in", userSession);
    userSession.redirectToSignIn()
  }

  return <button color="link" onClick={handleClick}>Login to BlockStack</button>
}

export default Login;
