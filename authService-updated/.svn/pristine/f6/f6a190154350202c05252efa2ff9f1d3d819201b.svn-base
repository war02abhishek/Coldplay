package com.itgi.claim;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.itgi.claim.wrapper.UserPrincipal;

@Component
public class JWTTokenProvider {

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.token.validity}")
	private Long expirationTime;

	@Value("${jwt.authorities.key}")
	private String jwtAuthorities;

	@Value("${jwt.issuer}")
	private String jwtIssuer;

	@Value("${jwt.token.not-verified.message}")
	private String jwtTokenNotVerifiedMessage;

	public String generateToken(UserPrincipal userPrincipal) {
		 String[] claims = userPrincipal.getAuthorities().stream()
	                .map(GrantedAuthority::getAuthority)
	                .toArray(String[]::new);

		return JWT.create().withIssuer(jwtIssuer).withSubject(userPrincipal.getUsername())
				.withClaim("userId", userPrincipal.getUserId())
				.withClaim("roleId", userPrincipal.getRoleId())
				.withArrayClaim(jwtAuthorities, claims).withIssuedAt(new Date())
				.withExpiresAt(new Date(System.currentTimeMillis() + expirationTime))
				.sign(Algorithm.HMAC512(secret.getBytes()));
	}

	public List<GrantedAuthority> getAuthorities(String token) {
		String[] claims = getJWTVerifier().verify(token).getClaim(jwtAuthorities).asArray(String.class);
		return Arrays.stream(claims).map(SimpleGrantedAuthority::new).collect(Collectors.toList());
	}

	public Authentication getAuthentication(String username, List<GrantedAuthority> authorities,
			HttpServletRequest request) {
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username, null,
				authorities);
		authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		return authentication;
	}

	public boolean isTokenValid(String username, String token) {
		try {
			return StringUtils.isNotBlank(username) && !isTokenExpired(getJWTVerifier().verify(token));
		} catch (JWTVerificationException e) {
			return false;
		}
	}

	public String getSubject(String token) {
		return getJWTVerifier().verify(token).getSubject();
	}

	private boolean isTokenExpired(DecodedJWT decodedJWT) {
		return decodedJWT.getExpiresAt().before(new Date());
	}

	private JWTVerifier getJWTVerifier() {
		try {
			Algorithm algorithm = Algorithm.HMAC512(secret);
			return JWT.require(algorithm).withIssuer(jwtIssuer).build();
		} catch (JWTVerificationException e) {
			throw new JWTVerificationException(jwtTokenNotVerifiedMessage);
		}
	}
}
