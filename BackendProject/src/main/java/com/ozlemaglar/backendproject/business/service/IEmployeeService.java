package com.ozlemaglar.backendproject.business.service;

import com.ozlemaglar.backendproject.data.entity.EmployeeEntity;
import com.ozlemaglar.backendproject.business.dto.EmployeeDto;

import java.util.List;
import java.util.Map;

public interface IEmployeeService {
    //Model Mapper = Entity-Dto

    public EmployeeDto entityToDto(EmployeeEntity employeeEntity);

    public EmployeeEntity dtoToEntity(EmployeeDto employeeDto);

    //save
    public EmployeeDto createEmployee(EmployeeDto employeeDto);

    //list
    public List<EmployeeDto> getAllEmployees();

    //find
    public EmployeeDto getEmployeeById(Long id);

    //update
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);

    //delete
    public Map<String,Boolean> deleteEmployee(Long id);
}
