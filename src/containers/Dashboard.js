import React from 'react'
import {appConfig} from '../utils/constants';
import {UserSession} from 'blockstack';
import Login from '../components/Login';
import Logout from '../components/Logout';

class Dashboard extends React.Component{
  state = {
    search: "",
    userSession: new UserSession({appConfig})
  }

  componentDidMount = async () => {
    const {userSession} = this.state
    if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
      const userData = await userSession.handlePendingSignIn()
      window.location="/"

      // if (!userData.username) {
      //   throw new Error('This app requires a username.')
      // } else {
      //   window.location = "/"
      // }
    }
  }

  changeHandler = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickHandler = (event) => {
    console.log(this.state.search)
  }

  render(){
    const {userSession} = this.state
    return(
      <div>
        <input name="search" type="text" value={this.state.search} onChange={this.changeHandler}/>
        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
      </div>
    )
  }
}

export default Dashboard
