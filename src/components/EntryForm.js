import React from 'react'

class Entry extends React.Component{
  render(){
    return(
      <div>
        <h2>New Entry</h2>
        <input type="textarea" name="comments"/>
        <input type="button" name="submit" value="Submit"/>
      </div>
    )
  }
}

export default Entry
