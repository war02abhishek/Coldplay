package com.itgi.claim;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.MimeTypeUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itgi.claim.wrapper.RestResponse;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

	@Value("${jwt.access.denied.message}")
	private String jwtAccessDeniedMessage;

	private static final Logger logger = LoggerFactory.getLogger(JwtAccessDeniedHandler.class);

	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException {

		RestResponse httpResponse = new RestResponse(HttpStatus.FORBIDDEN.value(), jwtAccessDeniedMessage);
		response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
		response.setStatus(HttpStatus.FORBIDDEN.value());

		try (OutputStream outputStream = response.getOutputStream()) {
			new ObjectMapper().writeValue(outputStream, httpResponse);
		} catch (Exception e) {
			logger.error("JwtAccessDeniedHandler -> Error writing response", e);
		}
	}
}
