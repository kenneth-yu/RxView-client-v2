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
import {connect} from 'react-redux';
import ProfilePage from '../components/ProfilePage';

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
      <Switch>
        <Route path='/myprofile' render={() => <ProfilePage userSession={userSession}/>}/>
        <Route path='/newprescription' component={RxForm}/>
        <Route path='/newentry' component={EntryForm}/>
<<<<<<< HEAD
        <Route path='/useredit' component={UserEdit}/>
      <div className="rx_form">
      <h1 className="logo"><span>Rx</span>View</h1>
        <input name="search" className="form-control" type="text" value={this.state.search} onChange={this.changeHandler} placeholder="Search..."/>
=======
        <Route path='/useredit' render={() => <UserEdit userSession={userSession}/> }/>
      <div>
        <input name="search" type="text" value={this.state.search} onChange={this.changeHandler}/>
>>>>>>> 575aa750e1832d9d9916217ea73d2858cd187a1f
        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
        { userSession.isUserSignedIn() ? <ViewProfile/> : null}
      </div>
      </Switch>
    )
  }
}

<<<<<<< HEAD
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
=======
const mapStateToProps = state => ({
  // userSession: state.userSession
})

export default connect(mapStateToProps)(Dashboard)
>>>>>>> 575aa750e1832d9d9916217ea73d2858cd187a1f
