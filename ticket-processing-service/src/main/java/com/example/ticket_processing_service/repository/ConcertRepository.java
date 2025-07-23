package com.example.ticket_processing_service.repository;

import java.util.List; 

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;

import com.example.ticket_processing_service.dto.Concert;

public interface ConcertRepository extends MongoRepository<Concert, String> {
  
    Concert findByConcertId(String concertId);
    
    
    
    // Query with available seats greater than a value
    @Query("{ 'available_seats' : { $gt: ?0 } }")
    List<Concert> findConcertsWithAvailableSeats(int seats);
    
    
    
    // Atomic update to deduct seats
    @Query("{ '_id' : ?0, 'available_seats' : { $gte : ?1 } }")
    @Update("{$inc : { 'available_seats' : -?1 }}")
    void deductSeats(String concertId, int quantity);
    
    
    
}