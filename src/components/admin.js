import React, { Component } from "react";
import Axios from "axios";
import { Spinner, Table } from "reactstrap";
let url = "http://localhost:5000/admin/docs";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state=({ docs: null, valid: null });
  }

  componentDidMount() {
    Axios.get(url)
      .then(response => {
        this.setState({ docs: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { docs } = this.state;
    return (
      <div>
        <p>Admin</p>
        <Table>
          <thead>
            <tr>
              <th>Document ID</th>
              <th>Date Modified</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {docs ? (
              docs.map(row => {
                return (
                    <tr>
                        <td>{row.name}</td>
                        <td>{row.datemod}</td>
                        <td>Link</td>
                    </tr>
                )
              })
            ) : (
              <Spinner />
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Admin;
