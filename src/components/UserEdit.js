import React from 'react'
import {connect} from 'react-redux'

class UserEdit extends React.Component{
  state = {
    name:"",
    age:"",
    ethnicity:"",
    country:"",
    gender:""
  }

  changeHandler = (event) =>{
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickHandler = async (event) => {
    const options = { decrypt: false }
    await this.props.userSession.putFile('RxViewProfile.json', JSON.stringify(this.state), options)
    window.location = "/myprofile"
  }

  render(){
    return(
      <div className="rx_form">
        <h2>User Edit</h2>
        <div class="form-group">
          <input type="text" className="form-control" onChange={this.changeHandler} name="name" placeholder="Name..." /><br/>
          <input type="text" className="form-control" onChange={this.changeHandler} name="age" placeholder="Age..." /><br/>
          <input type="text" className="form-control" onChange={this.changeHandler} name="ethnicity" placeholder="Ethnicity..." /><br/>
          <input type="text" className="form-control" onChange={this.changeHandler} name="country" placeholder="Country..." /><br/>
          <input type="text" className="form-control" onChange={this.changeHandler} name="gender" placeholder="Gender..." /><br/>
          <input type="button" name="submit" onClick={this.clickHandler} value="Submit"/ >
        </div>
      </div>
    )
  }
}

export default UserEdit
