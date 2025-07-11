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

	@KafkaListener(topics = "ticket-requests", groupId = "ticket-processor-group")
	public void processTicketRequest(String requestJson) {
		try {
			log.info("Received ticket request: {}", requestJson);

			// Deserialize the JSON string to TicketRequest
			TicketRequest request = objectMapper.readValue(requestJson, TicketRequest.class);

			boolean isBooked = inventoryService.reserveTicket(request.getConcertId(), request.getQuantity());

			TicketResult result = new TicketResult();
			result.setRequestId(request.getRequestId());
			result.setConcertId(request.getConcertId());
			result.setQuantity(request.getQuantity());
			result.setUserId(request.getUserId());

			if (isBooked) {
				result.setStatus("CONFIRMED");
				result.setMessage("Your tickets have been confirmed!");
			} else {
				// Add to queue and get position
				int queuePosition = ticketQueueService.addToQueue(request.getConcertId(), request.getUserId(),
						request.getQuantity(), request.getRequestId());

				result.setStatus("QUEUED");
				result.setMessage("You are in queue. Position: " + queuePosition);
			}

			// Serialize the result to JSON before sending
			String resultJson = objectMapper.writeValueAsString(result);
			kafkaTemplate.send("ticket-results", resultJson);

		} catch (JsonProcessingException e) {
			log.error("Failed to process ticket request", e);
			throw new RuntimeException("Failed to process ticket request", e);
		}
	}
}