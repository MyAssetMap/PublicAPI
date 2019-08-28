import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Checkbox, Button, FormGroup, FormControl, FormCheck, ControlLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

import {ReactComponent as Logo } from '../logo.svg';

import LoaderButton from "../components/Button/LoaderButton";
import "./BoxedForm.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

	this.state = {
	  isLoading: false,
	  email: "",
	  password: ""
	};

  }
  
  componentDidMount() {
      document.getElementsByTagName('body')[0].className = 'boxedFormPage';
  }

  componentWillUnmount() {
      document.getElementsByTagName('body')[0].className = '';
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password);
	  this.props.userHasAuthenticated(true);
      this.props.history.push("/");
	  
      console.log("Logged in");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }


	render() {
		return (
			<div className="login-container">
				<div className="boxedForm Login">
					<form onSubmit={this.handleSubmit}>
						<div className="form-header">
							<div className="logo text-center">
								<Logo height="60px"/>
							</div>
						</div>
						<FormGroup controlId="email" bsSize="large">
							<ControlLabel>Email Address</ControlLabel>
							<FormControl
								autoFocus
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="password" bsSize="large">
							<ControlLabel>Password</ControlLabel>
							<FormControl
								value={this.state.password}
								onChange={this.handleChange}
								type="password"
							/>
						</FormGroup>
					
						<Checkbox checked>
								Remember Me
						</Checkbox>
						<LoaderButton
							block
							bsSize="large"
							disabled={!this.validateForm()}
						type="submit"
						isLoading={this.state.isLoading}
						text="Login"
						loadingText="Logging in…"
						/>
						<FormGroup className="resetPassword" controlId="reset" bsSize="large">
							<Link to="/login/reset">Lost your password?</Link>
						</FormGroup>
					
					</form>
				</div>
			</div>
    );
  }
}
