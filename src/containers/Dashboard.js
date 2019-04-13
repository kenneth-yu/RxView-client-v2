import React from 'react'
import {appConfig} from '../utils/constants';
import {UserSession} from 'blockstack';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ViewProfile from '../components/ViewProfile';
import RxForm from '../components/RxForm';
import EntryForm from '../components/EntryForm';
import UserEdit from '../components/UserEdit'
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route path='/newprescription' component={RxForm}/>
        <Route path='/newentry' component={EntryForm}/>
        <Route path='/useredit' component={UserEdit}/>
      <div>
        <input name="search" type="text" value={this.state.search} onChange={this.changeHandler}/>
        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
        { userSession.isUserSignedIn() ? <ViewProfile/> : null}
      </div>
      </Switch>
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
