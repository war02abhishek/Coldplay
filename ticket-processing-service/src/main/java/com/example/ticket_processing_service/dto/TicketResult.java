package com.example.ticket_processing_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TicketResult {
    private String requestId;
    private String status; // "BOOKED" or "IN_QUEUE"
    @JsonProperty("concertId")
    public String concertId;
    
    @JsonProperty("quantity")
    public String quantity;
    private String message;
    
    @JsonProperty("userId")
    public String userId;
    
    public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getConcertId() {
		return concertId;
	}
	public void setConcertId(String concertId) {
		this.concertId = concertId;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
    
	public String getRequestId() {
		return requestId;
	}
	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

    // Getters and Setters
}