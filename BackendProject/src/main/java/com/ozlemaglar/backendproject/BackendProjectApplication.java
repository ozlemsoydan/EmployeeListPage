package com.ozlemaglar.backendproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendProjectApplication {

    public static void main(String[] args) {
        System.setProperty("spring.devtools.restart.enabled", "true");
        System.setProperty("java.awt.headless", "false"); //Disables headless
        SpringApplication.run(BackendProjectApplication.class, args);
    }

}
