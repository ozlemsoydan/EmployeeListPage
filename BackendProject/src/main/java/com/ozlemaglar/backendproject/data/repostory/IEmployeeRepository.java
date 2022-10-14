package com.ozlemaglar.backendproject.data.repostory;

import com.ozlemaglar.backendproject.data.entity.EmployeeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends CrudRepository<EmployeeEntity,Long> {

    EmployeeEntity findByEmail(String email);


}
