package com.example.ticket_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.ticket_service.dto.Concert;

public interface ConcertRepository extends MongoRepository<Concert, String> {
    Concert findByConcertId(String concertId);
}
