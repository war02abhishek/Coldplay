package com.example.notification_service.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;

public class NotifyProcessing {
	private static final Logger logger = LoggerFactory.getLogger(NotifyProcessing.class);

	@KafkaListener(topics = "ticket-result", groupId = "ticket-processor-group")
	public void processNotifyProcessing(String resultJson) {
		
		    
		 logger.info("Sending confirmation to user {} for request {}",resultJson);
	}
}
