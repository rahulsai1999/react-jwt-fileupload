import React, { Component } from "react";
import { Button, Form, Container, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import qs from "querystring";
let axiosconfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "*/*"
  }
};

class Signup extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "", phone: "", name: "" };
  }

  onChangeUserName = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  onChangePhone = event => {
    this.setState({ phone: event.target.value });
  };
  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onSignup = () => {
    var credentials = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      phone: this.state.phone,
      empid: this.state.username
    };
    console.log(credentials);
    var url = "http://localhost:5000/register";
    axios.post(url, qs.stringify(credentials), axiosconfig).then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </FormGroup>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Enter your name"
                onChange={this.onChangeName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Input
                type="text"
                maxLength={10}
                placeholder="Enter your phone number"
                onChange={this.onChangePhone}
              />
            </FormGroup>
            <Button variant="success" onClick={this.onSignup}>
              Sign Up
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Signup;
