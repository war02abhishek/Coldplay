package com.itgi.claim.wrapper;

public class FieldError {

	private String objectName;
	private String field;
	private String defaultMessage;

	public FieldError(String field, String defaultMessage) {
		super();
		this.field = field;
		this.defaultMessage = defaultMessage;
	}

	public FieldError(String objectName, String field, String defaultMessage) {
		this.objectName = objectName;
		this.field = field;
		this.defaultMessage = defaultMessage;
	}

	public String getObjectName() {
		return objectName;
	}

	public void setObjectName(String objectName) {
		this.objectName = objectName;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getDefaultMessage() {
		return defaultMessage;
	}

	public void setDefaultMessage(String defaultMessage) {
		this.defaultMessage = defaultMessage;
	}

	@Override
	public String toString() {
		return "FieldError [objectName=" + objectName + ", field=" + field + ", defaultMessage=" + defaultMessage + "]";
	}

}
