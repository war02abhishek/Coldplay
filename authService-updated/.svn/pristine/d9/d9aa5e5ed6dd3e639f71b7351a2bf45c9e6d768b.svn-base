package com.itgi.claim;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:sms.properties")
public class SMSProperties {
	@Autowired
	private Environment env;

	public String getProperty(String key) {
		return env.getProperty(key);
	}

}
