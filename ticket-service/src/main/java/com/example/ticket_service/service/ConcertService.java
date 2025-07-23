package com.example.ticket_service.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ticket_service.dto.Concert;
import com.example.ticket_service.repository.ConcertRepository;

@Service
public class ConcertService {

    @Autowired
    private ConcertRepository concertRepository;

    public Concert addConcert(Concert concert) {
        concert.setConcertId(UUID.randomUUID().toString());
        concert.setCreatedAt(LocalDateTime.now());
        concert.setUpdatedAt(LocalDateTime.now());
        concert.setAvailableSeats(concert.getTotalSeats());
        concert.setStatus("ACTIVE");
        return concertRepository.save(concert);
    }

    public Concert updateSeats(String concertId, int newSeatCount) {
        Concert concert = concertRepository.findByConcertId(concertId);
        if (concert == null) throw new RuntimeException("Concert not found");
        concert.setTotalSeats(newSeatCount);
        concert.setAvailableSeats(newSeatCount); // Optional: reset to new total
        concert.setUpdatedAt(LocalDateTime.now());
        return concertRepository.save(concert);
    }

    public Concert getConcertDetails(String concertId) {
        return concertRepository.findByConcertId(concertId);
    }
    public List<Concert>getAllConcerts(){
    	return concertRepository.findAll();
    }
}
