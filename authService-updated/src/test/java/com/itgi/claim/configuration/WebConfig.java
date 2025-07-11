package com.itgi.claim.configuration;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Autowired
	private Environment env;
	
	 @Bean
		public JavaMailSenderImpl mail() {
			JavaMailSenderImpl mail = new JavaMailSenderImpl();
			mail.setHost(env.getProperty("smtpHost"));
			mail.setPort(env.getProperty("smtpPort", Integer.class));
			mail.setUsername(env.getProperty("smtpFrom"));// enter your emailId.
			mail.setPassword(env.getProperty("smtpFromP"));// enter ur password.
			mail.setJavaMailProperties(eprops());
			return mail;
		}
	 
	 


	 private Properties eprops() {
			Properties properties = new Properties();
			properties.put("mail.smtp.ssl.enable", "false");
		     properties.put("mail.smtp.auth", "true");
			return properties;
		}
	 
	 
     
	
}
