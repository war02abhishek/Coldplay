package com.example.ticket_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/tickets")
public class TicketController {

//    @Autowired
//    private TicketRequestProducer ticketRequestProducer;
//    
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @PostMapping("/book")
//    public String bookTicket(@RequestBody TicketRequest request) throws JsonProcessingException {
//        request.setRequestId(UUID.randomUUID().toString());
//        String requestJson = objectMapper.writeValueAsString(request);
//        ticketRequestProducer.sendTicketRequest(requestJson);
//        return "Your request is being processed. Please wait...";
//    }
    
    @GetMapping("/get")
    public String getMessage() {
    	return "Hello";
    }
    
}