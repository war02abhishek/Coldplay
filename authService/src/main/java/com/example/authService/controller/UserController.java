package com.example.authService.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/me")
    public String getCurrentUser(Authentication authentication) {
        return "Logged in as: " + authentication.getName();
    }
}
