package com.zudio.EnterpriseExpenseManager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // Disable CSRF for simplicity
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/users/register").permitAll()
                .requestMatchers("/api/users/**").hasAnyAuthority("ADMIN", "MANAGER")  // Only allow access for Admin/Manager
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.permitAll())  // Enable default login form
            .logout(logout -> logout.permitAll());  // Allow logout

        return http.build();
    }
}
