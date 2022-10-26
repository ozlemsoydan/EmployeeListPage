import React, { Component } from 'react'
import EmployeeServices from '../../services/EmployeeServices';

export default class EmployeeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {}

    }

  }

  componentDidMount() {
    EmployeeServices.getEmployeeById(this.state.id).then(
      response => {
        this.setState({
          employee: response.data
        })
      }
    )
  }

  render() {
    return (
      <>
        <div className="card text-center">
          <div className="card-header">Müşteri Detay Sayfası</div>
          <div className="card-body">
            <h4 className="card-title">{this.state.employee.id}</h4>
            <p className="card-text">{this.state.employee.id}</p>
            <p className="card-text">{this.state.employee.username}</p>
            <p className="card-text">{this.state.employee.email}</p>
            <p className="card-text">{this.state.employee.price}</p>
            <a href="">Click Me</a>
          </div>
        </div>
        <div className="card-footer text-muted">{this.state.employee.systemCreatedDate}</div>
      </>
    )
  }
}