package com.example.ticket_processing_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TicketRequest {
	
	@JsonProperty("requestId")
    public String requestId;
    
    @JsonProperty("concertId")
    public String concertId;
    
    @JsonProperty("userId")
    public String userId;

    @JsonProperty("quantity")
    public String quantity;
    
	public String getRequestId() {
		return requestId;
	}
	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}
	public String getConcertId() {
		return concertId;
	}
	public void setConcertId(String concertId) {
		this.concertId = concertId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

    // Getters and Setters
}