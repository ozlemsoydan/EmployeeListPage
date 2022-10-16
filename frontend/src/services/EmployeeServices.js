import axios from "axios";

const EmployeeURL = "/employee/api/v1/employees";

class EmployeeServices {

    //save(post)
    createEmployee(employeeDto) {
        return axios.post(EmployeeURL, employeeDto);
    }

    //list(get)
    getAllEmployees() {
        return axios.get(EmployeeURL);
    }

    //find
    getEmployeeById(id) {
        return axios.get(EmployeeURL + "/" + id);
    }

    //delete
    deleteEmployee(id) {
        return axios.delete(EmployeeURL + "/" + id);
    }

    //update(put)
    updateEmployee(id, employeeDto) {
        return axios.put(EmployeeURL + "/" + id, employeeDto)
    }
}

export default new EmployeeServices();