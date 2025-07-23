package com.example.ticket_service.dto;

public class TicketRequest {
	
	private String requestId;
	private String username;
	private String email;
	private String quantity;
	private String paymentMode;
	private String concertId;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getConcertId() {
		return concertId;
	}

	public void setConcertId(String concertId) {
		this.concertId = concertId;
	}

	// Getters and Setters
}