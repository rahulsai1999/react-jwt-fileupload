import React, { Component } from "react";
import { Button } from "reactstrap";
import _ from "lodash";
import Axios from "axios";
let axiosconfig = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if (token) {
      axiosconfig = {
        headers: {
          Authorization: "JWT " + token
        }
      };

      let url = "http://localhost:5000/current";

      Axios.get(url, axiosconfig).then(response => {
        const { data } = response;
        const isadmin = _.has(data, "isAdmin");
        if (isadmin) this.setState({ user: "admin" });
        else this.setState({ user: "staff" });
        console.log(this.state.user);
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Hello</h3>
        <Button color="success">Login</Button>
        <Button color="danger">Sign Up</Button>
        <div>{this.state.user}</div>
      </div>
    );
  }
}

export default Home;
