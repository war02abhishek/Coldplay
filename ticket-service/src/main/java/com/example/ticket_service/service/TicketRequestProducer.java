package com.example.ticket_service.service;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;


@Service
public class TicketRequestProducer {

    private static final String TOPIC = "ticket-requests";

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendTicketRequest(String request) {
    	
        kafkaTemplate.send(TOPIC, request);
    }
}