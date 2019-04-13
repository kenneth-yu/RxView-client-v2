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
<<<<<<< HEAD
import {connect} from 'react-redux';
=======
>>>>>>> e0c3020e845a896e63eb26f6749bc8c23a6051d5

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
<<<<<<< HEAD
  }
=======
  } // I added a space
>>>>>>> e0c3020e845a896e63eb26f6749bc8c23a6051d5

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

<<<<<<< HEAD
const mapStateToProps = state => ({
  // userSession: state.userSession
})

export default connect(mapStateToProps)(Dashboard)
=======
export default Dashboard
>>>>>>> e0c3020e845a896e63eb26f6749bc8c23a6051d5
