import React from "react";

class ViewProfile extends React.Component {
  clickHandler = () => {
    window.location = "/myprofile";
  };

  clickHandlerMeds = () => {
    window.location = "/meds";
  };

  render() {
    return (
      <div>
        <input type="button" value="View Profile" onClick={this.clickHandler} />
        <input
          type="button"
          value="View All Meds"
          onClick={this.clickHandlerMeds}
        />
      </div>
    );
  }
}

export default ViewProfile;
