package net.guides.springboot.springboot2jpaauditing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import io.swagger.annotations.SwaggerDefinition;
import net.guides.springboot.springboot2jpaauditing.audit.AuditorAwareImpl;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableSwagger2
@SwaggerDefinition
public class Springboot2JpaAuditingApplication {

	@Bean
	public AuditorAware<String> auditorAware() {
		return new AuditorAwareImpl();
	}

	public static void main(String[] args) {
		SpringApplication.run(Springboot2JpaAuditingApplication.class, args);
	}
}
