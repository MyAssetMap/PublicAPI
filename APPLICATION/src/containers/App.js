import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/Button/LoaderButton";
import authConfig from "../config/authConfig";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      content: ""
    };
  }

  handleSubmit = async event => {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div className="App">
        <p>Shane's Application goes here.</p>
      </div>
    );
  }
}
