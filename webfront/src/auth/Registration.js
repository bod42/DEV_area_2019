import React, { Component } from "react";
const axios = require('axios');


export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:8080/register",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
      )
      .then(response => {
        console.log(response)
        if (response.data === "created") {
          window.confirm("user created")
          this.props.conected(false);
        }
      })
      .catch(error => {
        window.confirm("registration error");
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email"
            placeholder="Email" value={this.state.email}
            onChange={this.handleChange} required />

          <input type="password" name="password"
            placeholder="Password" value={this.state.password}
            onChange={this.handleChange} required />

          <input type="password" name="password_confirmation"
            placeholder="Password confirmation" value={this.state.password_confirmation}
            onChange={this.handleChange} required />

          <button id="dlsApkBtn" type="click">Register</button>
        </form>
      </div>
    );
  }
}
