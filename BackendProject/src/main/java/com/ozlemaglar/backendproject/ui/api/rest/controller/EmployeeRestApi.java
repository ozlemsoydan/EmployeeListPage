package com.ozlemaglar.backendproject.ui.api.rest.controller;


import com.ozlemaglar.backendproject.business.dto.EmployeeDto;
import com.ozlemaglar.backendproject.business.service.IEmployeeService;
import com.ozlemaglar.backendproject.ui.api.rest.IEmployeeApiRest;
import lombok.RequiredArgsConstructor;
import lombok.experimental.PackagePrivate;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor

@RestController
@RequestMapping("/employee/api/v1")
@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeRestApi implements IEmployeeApiRest {


    private final IEmployeeService service;

    //http://localhost:8080/employee/api/v1
    //http://localhost:8080/employee/api/v1/index
    @Override
    @GetMapping({"/","/index"})
    public String getRoot() {
        return "index";
    }

    //Save
    //http://localhost:8080/employee/api/v1/employees
    @Override
    @PostMapping("/employees")
    public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
        service.createEmployee(employeeDto);
        return ResponseEntity.ok(employeeDto);
    }


    //List
    //http://localhost:8080/employee/api/v1/employees
    @Override
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> list =service.getAllEmployees();
        return ResponseEntity.ok(list);
    }

    //Find
    //http://localhost:8080/employee/api/v1/employees/1
    @Override
    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable(name="id") Long id) {
        return ResponseEntity.ok(service.getEmployeeById(id));
    }


    //Update
    //
    @Override
    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@Valid @PathVariable(name="id") Long id, EmployeeDto employeeDto) {
        service.updateEmployee(id,employeeDto);
        return ResponseEntity.ok(employeeDto);
    }

    //Delete
    //http://localhost:8080/employee/api/v1/employees/1
    @Override
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable(name="id") Long id) {
        service.deleteEmployee(id);
        Map<String,Boolean> response=new HashMap<>();
        response.put("silindi", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
