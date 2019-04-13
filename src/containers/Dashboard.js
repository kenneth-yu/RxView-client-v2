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
  } // I added a space

  clickHandler = (event) => {
    console.log(this.state.search)
  }

  render(){
    const {userSession} = this.state
    return(
      <div className="login_page">
      <div className="login_container">
        <div className="form-group">
          <input name="search" type="text" value={this.state.search} className="form-control" onChange={this.changeHandler}/>
        </div>

        <div className="form-group">
          <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler} placeholder="Username"/>
        </div>
        { userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
      </div>
      </div>
    )
  }
}

export default Dashboard

// <div className="login_container">
//   <h1>RxView 💊</h1>
//   <div class="form-group">
//     <input type="text" className="form-control" placeholder="Username" />
//   </div>
//
//   <div class="form-group">
//     <input type="password" className="form-control" placeholder="Password" />
//   </div>
//
//   <button type="button" className="btn btn-outline-danger">Login</button>
// </div>
