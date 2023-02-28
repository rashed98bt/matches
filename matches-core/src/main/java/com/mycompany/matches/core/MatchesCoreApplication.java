package com.mycompany.matches.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.mycompany.matches.core"})
public class MatchesCoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(MatchesCoreApplication.class, args);
    }

}
