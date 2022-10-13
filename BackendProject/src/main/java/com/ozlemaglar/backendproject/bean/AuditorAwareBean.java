package com.ozlemaglar.backendproject.bean;

import com.ozlemaglar.backendproject.audit.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;


@Configuration
public class AuditorAwareBean {

    @Bean
    public AuditorAware auditorAware(){
        return new AuditorAwareImpl();

    }
}
