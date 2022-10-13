package com.ozlemaglar.backendproject.business.service.impl;

import com.ozlemaglar.backendproject.business.service.IEmployeeService;
import com.ozlemaglar.backendproject.data.entity.EmployeeEntity;
import com.ozlemaglar.backendproject.data.repostory.IEmployeeRepository;
import com.ozlemaglar.backendproject.bean.ModelMapperBean;
import com.ozlemaglar.backendproject.business.dto.EmployeeDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional

@Log4j2
@RequiredArgsConstructor
public class EmployeeServiceImpl implements IEmployeeService {

    public final IEmployeeRepository repository;
    public final ModelMapperBean modelMapper;

    //Model Mapper(Dto)
    @Override
    public EmployeeDto entityToDto(EmployeeEntity employeeEntity) {
        EmployeeDto employeeDto= modelMapper.modelMapperMethod().map(employeeEntity,EmployeeDto.class);
        return null;
    }
    //Model Mapper(Entity)
    @Override
    public EmployeeEntity dtoToEntity(EmployeeDto employeeDto) {
        EmployeeEntity employeeEntity= modelMapper.modelMapperMethod().map(employeeDto,EmployeeEntity.class);
        return null;
    }

    //create
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        return null;
    }

    //list
    @Override
    public List<EmployeeDto> getAllEmployees(Long id) {
        return null;
    }

    //find
    @Override
    public EmployeeDto getEmployeeById() {
        return null;
    }

    //update
    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        return null;
    }

    //delete
    @Override
    public Map<String, Boolean> deleteEmployee(Long id) {
        return null;
    }
}
