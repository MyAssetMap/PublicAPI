import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/Route/AppliedRoute";
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Route/UnauthenticatedRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";

import App from "./containers/App";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";

import NotFound from "./containers/NotFound";


export default ({ childProps }) =>
  <Switch>

	<AuthenticatedRoute path="/" exact component={App} props={childProps} />
	// =======================
	// = NOT LOGGED IN PAGES =
	// =======================
	<UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
	<UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
	<UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={childProps} />

	// ===================
	// = LOGGED IN PAGES =
	// ===================
	<AuthenticatedRoute path="/app" exact component={App} props={childProps} />
	<AuthenticatedRoute path="/settings" exact component={Settings} props={childProps} />
	<AuthenticatedRoute path="/settings/password" exact component={ChangePassword} props={childProps} />
	<AuthenticatedRoute path="/settings/email" exact component={ChangeEmail} props={childProps} />


    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
