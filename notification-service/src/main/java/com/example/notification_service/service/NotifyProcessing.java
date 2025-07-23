package com.example.notification_service.service;

//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import com.example.notification_service.dto.TicketResult;
import com.example.notification_service.repository.BookingResultRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

public class NotifyProcessing {
	private static final Logger logger = LoggerFactory.getLogger(NotifyProcessing.class);

	@Autowired
	private BookingResultRepository bookingResultRepository;

	@Autowired
	private ObjectMapper objectMapper;

	@Autowired
	private MailService mailService;

	@KafkaListener(topics = {"Booking-confirmed-topic", "Booking-waitlisted-topic", "Booking-error-topic"})
	public void saveBookingResult(String resultJson) {
	    try {
	        TicketResult result = objectMapper.readValue(resultJson, TicketResult.class);

	        if ("CONFIRMED".equalsIgnoreCase(result.getStatus())) {
	            mailService.sendMail(
	                result.getEmail(),
	                "🎫 Ticket Booking Confirmed",
	                "Hello " + result.getUsername() + ",\n\nYour tickets have been confirmed for concert ID: " 
	                + result.getConcertId() + "\n\nThank you for booking!"
	            );

	        } else if ("QUEUED".equalsIgnoreCase(result.getStatus())) {
	            mailService.sendMail(
	                result.getEmail(),
	                "🎫 Ticket Booking Queued",
	                "Hello " + result.getUsername() + ",\n\nYou have been added to the waitlist for concert ID: "
	                + result.getConcertId() + ". We will notify you once tickets become available."
	            );

	        } else if ("ERROR".equalsIgnoreCase(result.getStatus())) {
	            mailService.sendMail(
	                result.getEmail(),
	                "❌ Ticket Booking Failed",
	                "Hello " + result.getUsername() + ",\n\nWe couldn't process your booking request.\nReason: "
	                + result.getMessage()
	            );
	        }

	        // Save result in DB
	        bookingResultRepository.save(result);

	    } catch (Exception e) {
	        logger.error("Failed to save or send notification for ticket result", e);
	    }
	}


}
