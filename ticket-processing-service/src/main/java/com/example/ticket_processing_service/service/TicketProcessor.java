package com.example.ticket_processing_service.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.ticket_processing_service.dto.TicketRequest;
import com.example.ticket_processing_service.dto.TicketResult;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TicketProcessor {
	private static final Logger log = LoggerFactory.getLogger(TicketProcessor.class);
	private static final String QUEUE_KEY_PREFIX = "queue:";

	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;

	@Autowired
	private InventoryService inventoryService;

	@Autowired
	private TicketQueueService ticketQueueService;

	@Autowired
	private ObjectMapper objectMapper; // Autowire ObjectMapper

	private void sendErrorResult(String requestJson, String errorMessage) {
		try {
			TicketRequest request = objectMapper.readValue(requestJson, TicketRequest.class);
			TicketResult result = new TicketResult();
			result.setRequestId(request.getRequestId());
			result.setConcertId(request.getConcertId());
			result.setQuantity(request.getQuantity());
			result.setUsername(request.getUsername());
			result.setEmail(request.getEmail());
			result.setPaymentMode(request.getPaymentMode());
			result.setStatus("ERROR");
			result.setMessage("Booking failed: " + errorMessage);

			String resultJson = objectMapper.writeValueAsString(result);
			kafkaTemplate.send("Booking-error-topic", resultJson); // 🔁 new topic for failures

			log.info("Error result sent: {}", resultJson);

		} catch (Exception ex) {
			log.error("Failed to send error result", ex);
		}
	}

	@KafkaListener(topics = "Booking-request-topic", groupId = "ticket-processor-group")
	public void processTicketRequest(String requestJson) {
		try {
			log.info("Received ticket request: {}", requestJson);

			// 1. Deserialize request
			TicketRequest request = objectMapper.readValue(requestJson, TicketRequest.class);

			// 2. Attempt to reserve ticket
			boolean isBooked = inventoryService.reserveTicket(request.getConcertId(), request.getQuantity());
            log.info("Is Booking done "+isBooked);
			// 3. Build result
			TicketResult result = buildTicketResult(request, isBooked);

		} catch (JsonProcessingException e) {
			log.error("Failed to deserialize ticket request: {}", requestJson, e);
		} catch (Exception ex) {
			sendErrorResult(requestJson, ex.getMessage());
			log.error("Unexpected error while processing ticket request", ex);
		}
	}

	private TicketResult buildTicketResult(TicketRequest request, boolean isBooked) throws JsonProcessingException {
		TicketResult result = new TicketResult();
		result.setRequestId(request.getRequestId());
		result.setConcertId(request.getConcertId());
		result.setQuantity(request.getQuantity());
		result.setUsername(request.getUsername());
		result.setEmail(request.getEmail());
		result.setPaymentMode(request.getPaymentMode());

		if (isBooked) {
			result.setStatus("CONFIRMED");
			result.setMessage("Your tickets have been confirmed!");

			String resultJson = objectMapper.writeValueAsString(result);
			kafkaTemplate.send("Booking-confirmed-topic", resultJson);

			log.info("Ticket result sent: {}", resultJson);

		} else {
//        int queuePosition = ticketQueueService.addToQueue(
//                request.getConcertId(),
//                request.getUserId(),
//                request.getQuantity(),
//                request.getRequestId()
//        );
			result.setStatus("QUEUED");
			result.setMessage("You are in queue. Position: ");
			String resultJson = objectMapper.writeValueAsString(result);
			kafkaTemplate.send("Booking-waitlisted-topic", resultJson);

		}

		return result;
	}

}