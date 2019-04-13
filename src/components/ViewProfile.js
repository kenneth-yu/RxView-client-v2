import React from 'react'

class ViewProfile extends React.Component{
  clickHandler = () => {
    window.location = '/myprofile'
  }

  render(){
    return(
      <input type="button" value="View Profile" onClick={this.clickHandler}/>
    )
  }
}

export default ViewProfile
