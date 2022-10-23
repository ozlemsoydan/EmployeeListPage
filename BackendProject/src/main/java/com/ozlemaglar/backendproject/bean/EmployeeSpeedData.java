package com.ozlemaglar.backendproject.bean;


import com.ozlemaglar.backendproject.business.dto.EmployeeDto;
import com.ozlemaglar.backendproject.business.service.impl.EmployeeServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.CommonDataSource;
import java.util.UUID;

@RequiredArgsConstructor
@Configuration
public class EmployeeSpeedData {


    private  final  PasswordEncoderBean passwordEncoderBean;
    @Bean
    CommandLineRunner createEmployeeData(EmployeeServiceImpl service){
        return (args)->{
            for (int i = 1; i <=5 ; i++) {
                UUID uuid= UUID.randomUUID();
                EmployeeDto employeeDto = EmployeeDto.builder()
                        .email(uuid+ "@gmail.com")
                        .password(passwordEncoderBean.passwordEncoderMethod().encode("root"+i))
                        .username("özlem ağlar"+i)
                        .price(10*i).build();
                service.createEmployee(employeeDto);
            }

        };
    }

}
