package com.example.notification_service.service;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(String to, String subject, String messageBody) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(messageBody);
        message.setFrom("abhishekwanve369@gmail.com");
        mailSender.send(message);
    }
}
