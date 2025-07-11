package com.itgi.claim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource(value = "classpath:mail.properties")
@PropertySource(value = "classpath:mail.${spring.profiles.active}.properties", ignoreResourceNotFound = true)
public class MailProperties {

	@Autowired
	private Environment env;

	public String getProperty(String key) {
		return env.getProperty(key);
	}

	public String mailTemplatesPath() {
		return getProperty("mail.templates.path");
	}

	public String fromMail() {
		return getProperty("from.mail");
	}

	public String notificationSubject() {
		return getProperty("notification.subject");
	}

	public String notificationBcc() {
		return getProperty("notification.bcc");
	}

	public String smtpHost() {
		return getProperty("smtp.host");
	}

	public String smtpPort() {
		return getProperty("smtp.port");
	}

	public String mailSmtpAuth() {
		return getProperty("smtp.auth");
	}

	public String startTlsEnable() {
		return getProperty("starttls.enable");
	}

	public String mailIdnoReplyName() {
		return getProperty("mail.id-noreply.name");
	}

	public String mailIdNoReply() {
		return getProperty("mail.id-noreply");
	}

}
