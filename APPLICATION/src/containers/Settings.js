import React, { Component } from "react";
import { Auth } from "aws-amplify";

import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/Button/LoaderButton";
import "./Settings.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
	
	this.updateInfo()
	
  }
  
  updateInfo = async event => {
	  
      try {
        // const currentUser = await Auth.currentAuthenticatedUser();
		// console.log(currentUser)
		// console.log(Auth.userAttributes());
		//
		// Auth.currentSession().then(function(session) {
		//       console.log(JSON.stringify(session))
		//     }, function(err) {
		//       console.log(err)
		//     })
		//     Auth.currentAuthenticatedUser().then(function(user) {
		//       console.log("USER: " + JSON.stringify(user))
		//     })
      } catch (e) {
        alert(e.message);
      }
    };

  render() {

	// console.log(this.state);
    return (
      <div className="Settings">
		<p>You are currently logged In</p>
		<b>Email Address:</b>{ this.state.email }
		<br /><br /><br />
        <LinkContainer to="/settings/email">
          <LoaderButton
            block
            bsSize="large"
            text="Change Email"
          />
        </LinkContainer>
        <LinkContainer to="/settings/password">
          <LoaderButton
            block
            bsSize="large"
            text="Change Password"
          />
        </LinkContainer>
      </div>
    );
  }
}
