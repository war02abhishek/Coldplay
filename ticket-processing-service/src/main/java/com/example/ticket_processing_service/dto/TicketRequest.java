package com.example.ticket_processing_service.dto;

import java.io.Serializable;

public class TicketRequest implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 6347204564208850235L;
	private String requestId;
	private String username;
	private String email;
	private String quantity;
	private String paymentMode;
	private String concertId;
    private String status;
    
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
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
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
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

	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

    // Getters and Setters
}