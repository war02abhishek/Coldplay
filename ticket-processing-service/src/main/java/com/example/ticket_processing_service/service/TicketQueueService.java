package com.example.ticket_processing_service.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.example.ticket_processing_service.dto.TicketResult;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TicketQueueService {
	private static final String QUEUE_PREFIX = "queue:";
	private static final String QUEUE_POSITION_PREFIX = "queuepos:";

	@Autowired
	private RedisService redisService;

	@Autowired
	private InventoryService inventoryService;

	@Autowired
	private KafkaTemplate<String, String> kafkaTemplate;

	@Autowired
	private ObjectMapper objectMapper;

	public int addToQueue(String concertId, String userId, String quantity, String requestId) {
		String queueKey = QUEUE_PREFIX + concertId;

		// Add to sorted set with timestamp score
		double score = System.currentTimeMillis();
		String value = requestId + ":" + userId + ":" + quantity;
         
		//Atomic
		redisService.zAdd(queueKey, value, score);

		// Get and return position
		Long position = redisService.zRank(queueKey, value);
		return position != null ? position.intValue() + 1 : -1;
	}

	//seats with this concertId has been updated
	public void processQueue(String concertId) throws JsonProcessingException {
		String queueKey = QUEUE_PREFIX + concertId;

		while (true) {
			// Get next in queue
			// Get the oldest request (lowest score)
			Set<String>nextRequests = redisService.zRange(queueKey, 0, 0);
			if (nextRequests.isEmpty())
				break;

			String request = nextRequests.iterator().next();
			String[] parts = request.split(":");
			String requestId = parts[0];
			String userId = parts[1];
			String quantity = parts[2];

			// Try to fulfill
			boolean success = inventoryService.reserveTicket(concertId, quantity);

			if (success) {
				// Send confirmation
				TicketResult result = new TicketResult();
				result.setRequestId(requestId);
				result.setConcertId(concertId);
				result.setQuantity(quantity);
//				result.setUserId(userId);
				result.setStatus("CONFIRMED");
				result.setMessage("Your queued request has been confirmed!");

				kafkaTemplate.send("ticket-results", objectMapper.writeValueAsString(result));

				// Remove from queue redis
				redisService.zRem(queueKey, request);
			} else {
				break; // Stop if no inventory
			}
		}
	}
}