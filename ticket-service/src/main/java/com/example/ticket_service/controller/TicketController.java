package com.example.ticket_service.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
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
    public String bookTicket(@RequestBody TicketRequest request) throws JsonProcessingException {
        request.setRequestId(UUID.randomUUID().toString());
        String requestJson = objectMapper.writeValueAsString(request);
        ticketRequestProducer.sendTicketRequest(requestJson);
        return "Your request is being processed. Please wait...";
    }
    
    @GetMapping("/get")
    public String getMessage() {
    	return "Hello";
    }
    
}