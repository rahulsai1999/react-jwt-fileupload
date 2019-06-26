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

class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  onChangeUserName = event => {
    this.setState({ username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onlogin = () => {
    var credentials = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(credentials);
    var url = "http://localhost:5000/login";
    axios.post(url, qs.stringify(credentials), axiosconfig).then(response => {
      window.localStorage.setItem("token", response.data.token);
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
                placeholder="Enter email"
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
            <Button variant="primary" onClick={this.onlogin}>
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
