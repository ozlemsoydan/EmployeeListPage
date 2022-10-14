package com.ozlemaglar.backendproject.bean;


import com.ozlemaglar.backendproject.business.dto.EmployeeDto;
import com.ozlemaglar.backendproject.business.service.impl.EmployeeServiceImpl;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.CommonDataSource;

@Configuration
public class EmployeeSpeedData {

    @Bean
    CommandLineRunner createEmployeeData(EmployeeServiceImpl service){
        return (args)->{
            for (int i = 1; i <5 ; i++) {
                EmployeeDto employeeDto = EmployeeDto.builder()
                        .email("ozm.sydn@gmail.com"+i)
                        .password("root"+i)
                        .username("özlem ağlar"+i).build();
                service.createEmployee(employeeDto);
            }

        };
    }

}
