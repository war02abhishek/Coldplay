package com.example.ticket_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ticket_service.config.RestResponse;
import com.example.ticket_service.dto.Concert;
import com.example.ticket_service.service.ConcertService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private ConcertService concertService;

	@PostMapping("/addShow")
	public RestResponse addShow(@RequestBody Concert concert) {
		try {
			Concert saved = concertService.addConcert(concert);
			return new RestResponse(200, "Concert created successfully", saved);
		} catch (Exception e) {
			return new RestResponse(500, "Failed to add concert");
		}
	}

	@PutMapping("/updateSeats/{concertId}")
	public RestResponse updateSeats(@PathVariable String concertId, @RequestParam int seats) {
		try {
			Concert updated = concertService.updateSeats(concertId, seats);
			return new RestResponse(200, "Seats updated", updated);
		} catch (Exception e) {
			return new RestResponse(500, "Failed to update seats");
		}
	}

	@GetMapping("/details/{concertId}")
	public RestResponse getConcertDetails(@PathVariable String concertId) {
		try {
			Concert concert = concertService.getConcertDetails(concertId);
			return new RestResponse(200, "Success", concert);
		} catch (Exception e) {
			return new RestResponse(404, "Concert not found");
		}
	}
	
	@GetMapping("/getallConcerts")
	public RestResponse getAllConcerts() {
		List<Concert>list=null;
		try {
			list=concertService.getAllConcerts();
		}catch(Exception e) {
			return new RestResponse(400, "Concerts fetch failed");
		}
		return new RestResponse(200, "Success",list);
	}

}
