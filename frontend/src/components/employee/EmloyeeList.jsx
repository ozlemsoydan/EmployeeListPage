import React, { Component } from 'react'
import EmployeeServices from '../../services/EmployeeServices'

export default class EmloyeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

  }

  componentDidMount() {
    EmployeeServices.getAllEmployees().then(
      (response) => {
        this.setState({
          employees: response.data
        })
      }
    );
  }


  addEmployee() {
    this.props.history.push('/employee-add/_add')
  }

  editEmployee(id) {
    this.props.history.push(`/employee-add/${id}`)
  }

  viewEmployee(id) {
    this.props.history.push(`/employee-view/${id}`)
  }

  deleteEmployee(id) {
    EmployeeServices.deleteEmployee(id).then(
      response => {
        this.setState({
          employees: this.state.employees.filter(
            employee => employee.id !== id
          )
        })
      }
    )
  }


  render() {
    return (
      <>
        <h3 className="text-center text-uppercase mt-5">Müşteri Listesi</h3>

        <div className="row">
          <div className="mx-auto"><button style={{float:"right"}} className="btn btn-primary" onClick={this.addEmployee}>Yeni Ekle</button></div>
        </div>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAİL</th>
              <th>PASSWORD</th>
              <th>PRİCE</th>
              <th>UPDATE</th>
              <th>VİEW</th>
              <th>DELETE</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.employees.map(employees =>
                <tr key={employees.id}>
                  <td> {employees.id}</td>
                  <td> {employees.username}</td>
                  <td> {employees.email}</td>
                  <td> {employees.password}</td>
                  <td> {employees.price}</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square text-primary"  onClick={() => this.editEmployee(employees.id)}></i>
                    </td>
                  <td>
                    <i className="fa-solid fa-eye text-success" onClick={() => this.viewEmployee(employees.id)}></i></td>
                  <td>
                    <i className="fa-solid fa-trash-can text-danger" onClick={() => {
                    if (window.confirm("silmek istiyor musunuz?"))
                      this.deleteEmployee(employees.id)
                      }}></i>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </>
    )
  }
}
