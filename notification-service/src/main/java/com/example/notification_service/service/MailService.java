package com.example.notification_service.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private static final Logger logger = LoggerFactory.getLogger(MailService.class);

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(String to, String subject, String messageBody) {
        logger.info("[MAIL] Attempting to send email to: {}, subject: {}", to, subject);
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(messageBody);
            message.setFrom("abhishekwanve369@gmail.com");
            mailSender.send(message);
            logger.info("[MAIL] Email sent successfully to: {}", to);
        } catch (Exception e) {
            logger.error("[MAIL] Failed to send email to: {}, subject: {}", to, subject, e);
        }
    }
}
