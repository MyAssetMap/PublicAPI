import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";

import authConfig from "./config/authConfig";
import App from './components/App/App';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: authConfig.cognito.REGION,
    userPoolId: authConfig.cognito.USER_POOL_ID,
    identityPoolId: authConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: authConfig.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: authConfig.s3.REGION,
    bucket: authConfig.s3.BUCKET,
    identityPoolId: authConfig.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "login",
        endpoint: authConfig.apiGateway.URL,
        region: authConfig.apiGateway.REGION
      },
    ]
  }
});


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
