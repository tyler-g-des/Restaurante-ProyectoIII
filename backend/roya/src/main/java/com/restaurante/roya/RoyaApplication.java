package com.restaurante.roya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RoyaApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoyaApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/users").allowedOrigins("*","http://localhost:8080");
				registry.addMapping("/users").allowedOrigins("http://localhost:8080");
				registry.addMapping("/tablets").allowedOrigins("*","http://localhost:8080");
				registry.addMapping("/Inventory").allowedOrigins("http://localhost:8080");
			}
		};
	}

}
