package com.itgi.claim;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySources({ @PropertySource(value = "classpath:config.properties"),
		@PropertySource(value = "classpath:config.${spring.profiles.active}.properties", ignoreResourceNotFound = true) })
public class ConfigProperties {
	@Autowired
	private Environment env;

	public String getProperty(String key) {
		return env.getProperty(key);
	}

	public String getString(String key) {
		return getProperty(key);
	}

	public String getKycWebservieAddress() {
		return getProperty("kyc.webservice.address");
	}

	public String getP400WebServerAddress() {
		return getProperty("p400.webservice.address");
	}

	public String getP400WebServerUser() {
		return getProperty("p400.webservice.username");
	}

	public String getP400WebServerPassword() {
		return getProperty("p400.webservice.password");
	}

	public String getCordysWebServerAddressNewProduct() {
		String value = "";
		try {
			value = getProperty("cordys.webservice.address.fornewproduct");
		} catch (Exception e) {
		}
		if (StringUtils.isBlank(value)) {
			value = getCordysWebServerAddress();
		}
		return value;
	}

	public String getCordysWebServerAddress() {
		return getProperty("cordys.webservice.address");
	}

	public String getCordysWebServerAddressTravel() {
		return getProperty("cordys.webservice.address.travel");
	}

	public String getCordysWebServerUser() {
		return getProperty("cordys.webservice.username");
	}

	public String getCordysWebServerPassword() {
		return getProperty("cordys.webservice.password");
	}

	public int getCordysWebServerTimeout() {
		return Integer.parseInt(getProperty("cordys.webservice.timeout"));
	}

	public int getSiebelWebServerTimeout() {
		return Integer.parseInt(getProperty("siebel.webservice.timeout"));
	}

	public String getSiebelWebServerAddress() {
		return getProperty("siebel.webservice.address");
	}

	public String getSiebelWebServerUser() {
		return getProperty("siebel.webservice.username");
	}

	public String getSiebelWebServerSetHeaderFlag() {
		return getProperty("siebel.webservice.header.flag");
	}

	public String getSiebelWebServerPassword() {
		return getProperty("siebel.webservice.password");
	}

}
