import React from 'react';
import {connect} from 'react-redux';

class ProfilePage extends React.Component {
  state = {
    data: {}
  }

  componentDidMount = async () => {
    const options = { decrypt: true }
    const result = await this.props.userSession.getFile('RxViewProfile.json', options)
    if (result) {
      const theUserData = JSON.parse(result)
      console.log("got data", theUserData);
      return this.setState({ data: theUserData })
    }

  }

  editProfileClick = () => {
    window.location = "/useredit"
  }


  render() {
    console.log("state", this.state);
    const {name, age, ethnicity, gender, country} = this.state.data
    return (
      <div className="rx_form">
        <h1>Name: {name}</h1>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Ethnicity: {ethnicity}</p>
        <p>Country: {country}</p>
        <button onClick={this.editProfileClick}>Edit Profile</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData
})

export default connect(mapStateToProps)(ProfilePage);
