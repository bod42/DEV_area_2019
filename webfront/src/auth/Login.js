import React, { Component } from "react";
import '../App.css';
const axios = require('axios');


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit = async () => {
    const { email, password } = this.state;

    axios
      .get(
        "http://localhost:8080/login?email="+email+"&password="
        +password,)
      .then(response => {
        if (response.data === "connected")
          this.props.conected(3);
        if (response.data === "bad passeword or email")
        window.confirm("registration error");
      })
      .catch(error => {
        window.confirm("registration error");
      });
};

  render() {
    return (
      <div id = "input">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button id="dlsApkBtn" onClick={this.handleSubmit} >Login</button>
      </div>
    );
  }
}
