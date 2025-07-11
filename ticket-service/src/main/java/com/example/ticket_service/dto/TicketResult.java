package com.example.ticket_service.dto;

public class TicketResult {
    private String requestId;
    private String status; // "BOOKED" or "IN_QUEUE"
    private String message;
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