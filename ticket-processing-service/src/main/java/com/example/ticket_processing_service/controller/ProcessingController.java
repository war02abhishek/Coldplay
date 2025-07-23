package com.example.ticket_processing_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ticket_processing_service.dto.Concert;
import com.example.ticket_processing_service.dto.Inventory;
import com.example.ticket_processing_service.repository.ConcertRepository;
import com.example.ticket_processing_service.service.RedisService;
import com.example.ticket_processing_service.service.TicketQueueService;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping("/redis")
public class ProcessingController {

    
    @GetMapping("/get")
    public String getMessage() {
    	return "Ticket Processing Service working";
    }
    
    
//
//    @PostMapping("/save")
//    public String saveData(@RequestParam String key, @RequestParam String value) {
//        redisService.saveData(key, value);
//        return "Data saved!";
//    }
//
//    @GetMapping("/get")
//    public Object getData(@RequestParam String key) {
//        return redisService.getData(key);
//    }
//    
//    
//    
//    @GetMapping("/check")
//    public String getString() {
//        return "Hello Ticket Processing MicroService";
//    }
//    
//    @PostMapping("/insertConcert")
//    public String insertConcert(@RequestBody Concert concert) {
//    	 Concert saved = concertRepository.save(concert);
//    	 System.out.println("Saved concert with ID: " + saved.getConcertId());
//    	return "inserted";
//    }
//
//    @DeleteMapping("/delete")
//    public String deleteData(@RequestParam String key) {
//        redisService.deleteData(key);
//        return "Data deleted!";
//    }
}