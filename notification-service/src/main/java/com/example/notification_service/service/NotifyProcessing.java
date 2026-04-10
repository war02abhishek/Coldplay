package com.example.notification_service.service;

//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log; 

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import com.example.notification_service.dto.TicketResult;
import com.example.notification_service.repository.BookingResultRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Service;

@Service
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
	    logger.info("[NOTIFICATION] Received message from Kafka: {}", resultJson);
	    try {
	        TicketResult result = objectMapper.readValue(resultJson, TicketResult.class);
	        logger.info("[NOTIFICATION] Parsed TicketResult - user: {}, concertId: {}, status: {}",
	            result.getUsername(), result.getConcertId(), result.getStatus());

	        if ("CONFIRMED".equalsIgnoreCase(result.getStatus())) {
	            logger.info("[NOTIFICATION] Sending CONFIRMED email to: {}", result.getEmail());
	            mailService.sendMail(
	                result.getEmail(),
	                "🎫 Ticket Booking Confirmed",
	                "Hello " + result.getUsername() + ",\n\nYour tickets have been confirmed for concert ID: "
	                + result.getConcertId() + "\n\nThank you for booking!"
	            );
	            logger.info("[NOTIFICATION] CONFIRMED email sent successfully to: {}", result.getEmail());

	        } else if ("QUEUED".equalsIgnoreCase(result.getStatus())) {
	            logger.info("[NOTIFICATION] Sending QUEUED email to: {}", result.getEmail());
	            mailService.sendMail(
	                result.getEmail(),
	                "🎫 Ticket Booking Queued",
	                "Hello " + result.getUsername() + ",\n\nYou have been added to the waitlist for concert ID: "
	                + result.getConcertId() + ". We will notify you once tickets become available."
	            );
	            logger.info("[NOTIFICATION] QUEUED email sent successfully to: {}", result.getEmail());

	        } else if ("ERROR".equalsIgnoreCase(result.getStatus())) {
	            logger.warn("[NOTIFICATION] Sending ERROR email to: {}, reason: {}", result.getEmail(), result.getMessage());
	            mailService.sendMail(
	                result.getEmail(),
	                "❌ Ticket Booking Failed",
	                "Hello " + result.getUsername() + ",\n\nWe couldn't process your booking request.\nReason: "
	                + result.getMessage()
	            );
	            logger.info("[NOTIFICATION] ERROR email sent successfully to: {}", result.getEmail());

	        } else {
	            logger.warn("[NOTIFICATION] Unknown status received: {}", result.getStatus());
	        }

	        bookingResultRepository.save(result);
	        logger.info("[NOTIFICATION] TicketResult saved to DB for user: {}, concertId: {}",
	            result.getUsername(), result.getConcertId());

	    } catch (Exception e) {
	        logger.error("[NOTIFICATION] Failed to process notification. Raw message: {}", resultJson, e);
	    }
	}


}
