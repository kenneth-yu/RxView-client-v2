import React from 'react'
import {appConfig} from '../utils/constants';
import {UserSession, isUserSignedIn } from 'blockstack';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ViewProfile from '../components/ViewProfile';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
  state = {
    search: ""
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
    const {userSession} = this.props
    return(
      <div>
        <input name="search" type="text" value={this.state.search} onChange={this.changeHandler}/>
        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
        { isUserSignedIn() ? <ViewProfile/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userSession: state.userSession
})

export default connect(mapStateToProps)(Dashboard)
