import React, { Component } from 'react';

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    console.log("Login Page")
    return(
      <div className="login_container">
        <h1>RxView 💊</h1>
        <div class="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div class="form-group">
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <button type="button" className="btn btn-outline-danger">Login</button>
      </div>
    )
  }
}

export default UserLogin;
