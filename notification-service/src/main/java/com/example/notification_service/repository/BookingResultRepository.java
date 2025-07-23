package com.example.notification_service.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.notification_service.dto.TicketResult;


public interface BookingResultRepository extends MongoRepository<TicketResult, String> {
    Optional<TicketResult> findByRequestId(String requestId);
}
