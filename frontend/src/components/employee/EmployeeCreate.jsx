import React, { Component } from 'react'
import OtherLanguage from '../../i18n/OtherLanguage';
import EmployeeCreateInput from '../../resuability/EmployeeCreateInput';
import EmployeeServices from '../../services/EmployeeServices';

export default class EmployeeCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: "",
      email: "",
      price: "",
      password: ""

    }
    this.homePage = this.homePage.bind(this);
    this.saveorUpdate = this.saveorUpdate.bind(this);
    this.saveorUpdateEmplloyee = this.saveorUpdateEmplloyee.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return
    } else {
      EmployeeServices.getEmployeeById(this.state.id).then(
        response => {
          let employee = response.data;
          console.log(employee)
          this.setState({
            username: employee.username,
            email: employee.email,
            password: employee.password,
            price: employee.price
          })
        }
      )
    }
  }
  homePage() {
    this.props.history.push('/')
  }

  cancel() {
    this.props.history.push('/employees')
  }

  saveorUpdate() {
    if (this.state.id === "_add") {
      return <h1 className='display-3 text-center mt-5'>Müşteri Ekle</h1>
    } else {
      return <h1 className='display-3 text-center mt-5'>Müşteri Güncelle</h1>
    }
  }

  saveorUpdateEmplloyee = (event) => {
    event.preventDefault();
    let employee = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      price: this.state.price,
    }
    if (this.state.id === "_add") {
      EmployeeServices.createEmployee(employee).then(
        response => {
          this.props.history.push('/employees')
          alert(employee.username + "eklendi");
        }
      ).catch((error) => {
        // Error
        debugger;
        if (error.response) {
          alert(error.response.data.errors[0].defaultMessage);
        }
    });
    }
    else {
      EmployeeServices.updateEmployee(this.state.id, employee).then(
        response => {
          this.props.history.push('/employees')
          alert(employee.username + " güncellendi");
        }
      )
    }
  }

  onChangeUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  onChangePrice = (event) => {
    this.setState({
      price: event.target.value
    })
  }



  render() {
    return (
      <>
        {this.saveorUpdate()}
        <div className="mx-auto"><button className="btn btn-primary mb-4" onClick={this.homePage}>Listele</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="card-body">

              <EmployeeCreateInput type="text" placeholder='Kullanıcı Adı' name='username' id="username" label="Kullanıcı Adı" focus="true" value={this.state.username} onChangeInput={this.onChangeUserName} />

              <EmployeeCreateInput type="email" placeholder='Email' name='email' id="email" label="Email" focus="false" value={this.state.email} onChangeInput={this.onChangeEmail} />

              <EmployeeCreateInput type="password" placeholder='Şifre' name='password' id="password" label="Kullanıcı Şifresi" focus="false" value={this.state.password} onChangeInput={this.onChangePassword} />

              <EmployeeCreateInput type="number" placeholder='Price' name='price' id="price" label="Price" focus="false" value={this.state.price} onChangeInput={this.onChangePrice} />

              <div className="mt-3 mb-3 d-inline">
                <button type='reset' className="btn btn-danger" onClick={this.cancel.bind(this)}>Temizle</button>
                <button type='submit' className="btn btn-primary" onClick={this.saveorUpdateEmplloyee} >Gönder</button>
              </div>

              <OtherLanguage/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
