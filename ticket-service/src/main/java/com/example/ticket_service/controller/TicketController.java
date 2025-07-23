package com.example.ticket_service.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ticket_service.dto.TicketRequest;
import com.example.ticket_service.service.TicketRequestProducer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;



@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketRequestProducer ticketRequestProducer;
  
    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/book")
    public ResponseEntity<Map<String, Object>> bookTicket(@RequestBody TicketRequest request) {
        Map<String, Object> response = new HashMap<>();

        try {
            // Create unique request ID (timestamp + random suffix)
            String requestId = System.currentTimeMillis() + "-" + UUID.randomUUID().toString().substring(0, 8);
            request.setRequestId(requestId);

            // Convert request to JSON and send to Kafka
            String requestJson = objectMapper.writeValueAsString(request);
            ticketRequestProducer.sendTicketRequest(requestJson);

            // Prepare response
            response.put("status", "REQUEST_SUBMITTED");
            response.put("message", "Your ticket booking request has been submitted. Please check your inbox or use the status endpoint.");
            response.put("requestId", requestId);
            response.put("statusCheckUrl", "/tickets/status/" + requestId); // optional convenience

            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch (JsonProcessingException e) {
            response.put("status", "ERROR");
            response.put("message", "Failed to process your request. Please try again later.");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    
    @GetMapping("/get")
    public String getMessage() {
    	return "Ticket Service working";
    }
    
}