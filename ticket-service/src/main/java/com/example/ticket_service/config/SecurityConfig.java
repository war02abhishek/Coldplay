//package com.example.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests(requests -> requests
//                .antMatchers("/**").permitAll())
//                // Disable the default login form
//                .formLogin(login -> login.disable())
//                // Disable basic authentication
//                .httpBasic(basic -> basic.disable())
//                // Disable CSRF if not needed
//                .csrf(csrf -> csrf.disable());
//
//        return http.build();
//    }
//}
//package com;


