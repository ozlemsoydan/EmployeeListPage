import React, { Component } from 'react'
import EmployeeServices from '../../services/EmployeeServices';

export default class EmployeeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {}

    }
    this.homePage=this.homePage.bind(this);

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

  homePage() {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <div className="card ">
          <h3 className="card-header text-center m-3">Müşteri Detay Sayfası</h3>
          <div className="card-body text-left m-5">
          
            <p className="card-text"><b>id: </b>{this.state.employee.id}</p>
            <p className="card-text"><b>username: </b>{this.state.employee.username}</p>
            <p className="card-text"><b>email: </b>{this.state.employee.email}</p>
            <p className="card-text"><b>price: </b>{this.state.employee.price}</p>
            <button className="btn btn-primary " style={{float: "right"}} onClick={this.homePage}>Listeye dön</button>
          </div>
        </div>
        <div className="card-footer text-muted">{this.state.employee.systemCreatedDate}</div>
      </>
    )
  }
}
