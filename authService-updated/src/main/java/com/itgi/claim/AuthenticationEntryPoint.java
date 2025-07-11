package com.itgi.claim;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.util.MimeTypeUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itgi.claim.wrapper.RestResponse;

@Component
public class AuthenticationEntryPoint extends Http403ForbiddenEntryPoint {

	@Value("${jwt.forbidden.message}")
	private String forbiddenMessage;

	private Logger logger = LoggerFactory.getLogger(AuthenticationEntryPoint.class);

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception)
			throws IOException {
		OutputStream outputStream = null;
		try {
			RestResponse httpResponse = new RestResponse(HttpStatus.FORBIDDEN.value(), forbiddenMessage);
			response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
			response.setStatus(HttpStatus.FORBIDDEN.value());
			outputStream = response.getOutputStream();
			ObjectMapper mapper = new ObjectMapper();
			mapper.writeValue(outputStream, httpResponse);
			outputStream.flush();
		} finally {
			if (outputStream != null) {
				try {
					outputStream.close();
				} catch (Exception e) {
					logger.error("ERROR -> AuthenticationEntryPoint -> commence ", e);
				}
				outputStream = null;
			}
		}
	}

}
