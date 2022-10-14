package com.ozlemaglar.backendproject.annotation;

import com.ozlemaglar.backendproject.data.entity.EmployeeEntity;
import com.ozlemaglar.backendproject.data.repostory.IEmployeeRepository;
import lombok.RequiredArgsConstructor;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@RequiredArgsConstructor
public class UniqueEmailValidation implements ConstraintValidator<EmployeeUniqueEmail,String> {

    private final IEmployeeRepository repository;
    @Override
    public boolean isValid(String email, ConstraintValidatorContext constraintValidatorContext) {
        EmployeeEntity employeeEntity=repository.findByEmail(email);
        if (employeeEntity!=null){
            return false;
        }
        return true;
    }
}
