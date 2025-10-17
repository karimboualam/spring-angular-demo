package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Point d'entrée du backend Spring Boot.
 */
@SpringBootApplication(
    scanBasePackages = "com.example.backend" // Scanner tout le package backend
)
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
