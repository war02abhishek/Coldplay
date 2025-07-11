package com.itgi.claim.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itgi.claim.JWTTokenProvider;
import com.itgi.claim.ValidationProperties;
import com.itgi.claim.marine.repository.UserRepository;
import com.itgi.claim.service.UserService;
import com.itgi.claim.util.MailClient;
import com.itgi.claim.wrapper.RestResponse;
import com.itgi.claim.wrapper.User;
import com.itgi.claim.wrapper.UserPrincipal;

@RestController
@RequestMapping("/auth")
public class AuthController {
	private static Logger log = LoggerFactory.getLogger(AuthController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JWTTokenProvider jwtTokenProvider;

	@Autowired
	private ValidationProperties validationProperties;

	@Autowired
	private MailClient mailClient;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping(value = "/register", consumes = "application/json")
	public RestResponse registerUser(@RequestBody User user) {
		log.info("Inside registerUser() in AuthController");
		try {
			user.setPageName("register");
			BindingResult result = new BeanPropertyBindingResult(user, "User");
			if (result.hasErrors()) {
				return new RestResponse(HttpStatus.BAD_REQUEST.value(),
						result.getFieldErrors().get(0).getDefaultMessage());
			}

			// Check if user already exists
			if (null != userRepository.findByUsername(user.getUsername())) {
				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Username already taken.");
			}

			// Encode password
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			UserPrincipal userPrincipal = new UserPrincipal(user);
			userService.save(userPrincipal);

			return new RestResponse(HttpStatus.OK.value(), "User registered successfully.");
		} catch (Exception e) {
			log.error("Error in registerUser() in AuthController: " + e.getMessage(), e);
			return new RestResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Registration failed.");
		}
	}

	@PostMapping(value = "/login", consumes = "application/json")
	public RestResponse validateLoginCredentials(@RequestBody User userWrapper) {
		log.info("Inside validateLoginCredentials() in AuthController ");
		try {
			userWrapper.setPageName("login");
			BindingResult result = new BeanPropertyBindingResult(userWrapper, "User");
			if (result.hasErrors()) {
				return new RestResponse(HttpStatus.BAD_REQUEST.value(),
						result.getFieldErrors().get(0).getDefaultMessage());
			}
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(userWrapper.getUsername(), userWrapper.getPassword()));

			UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

			if (userPrincipal == null) {
				return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.invalidUserCredentials());
			}
			String token = jwtTokenProvider.generateToken(userPrincipal);

			Map<String, Object> object = new HashMap<>();

			object.put("jwtToken", token);
			object.put("privileges", userPrincipal.getPrivileges());
			return new RestResponse(HttpStatus.OK.value(), object);
		} catch (Exception e) {
			log.error("Error in validateLoginCredentials() in AuthController: " + e.getMessage());
			return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.exceptionError());
		}
	}

	private String getBaseURL(HttpServletRequest request) {
		String origin = request.getHeader("Origin");
		if (origin != null) {
			return origin;
		}
		return request.getScheme() + "://" + // http or https
				request.getServerName() + // domain name
				":" + request.getServerPort(); // port (if needed)
	}

//	@PostMapping(value = "/change-password", consumes = "application/json")
//	public RestResponse changePassword(@RequestBody User userWrapper) {
//		log.info("Inside changePassword() in AuthController ");
//		try {
//			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//			String username = (String) auth.getPrincipal();
//			if (StringUtils.isBlank(username)) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.unauthorizeAccess());
//			}
//			userWrapper.setUsername(username);
//			userWrapper.setPageName("change-password");
//			BindingResult result = new BeanPropertyBindingResult(userWrapper, "User");
//			userValidator.validate(userWrapper, result);
//			if (result.hasErrors()) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(),
//						result.getFieldErrors().get(0).getDefaultMessage());
//			}
//
//			boolean isChanged = userService.changePasssword(userWrapper);
//			if (isChanged) {
//				return new RestResponse(HttpStatus.OK.value(), "Password Changed Successfully..");
//			} else {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Error while changing password.");
//			}
//		} catch (Exception e) {
//			log.error("Error in changePassword() in AuthController: " + e.getMessage());
//			return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.exceptionError());
//		}
//	}
//
//	@PostMapping(value = "/forgot-password", consumes = "application/json")
//	public RestResponse forgotPassword(HttpServletRequest request, @RequestBody User userWrapper) {
//		log.info("Inside forgotPassword() in AuthController ");
//		try {
//			// validate form inputs
//			userWrapper.setPageName("forgot-password");
//			BindingResult result = new BeanPropertyBindingResult(userWrapper, "userWrapper");
//			userValidator.validate(userWrapper, result);
//			if (result.hasErrors()) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(),
//						result.getFieldErrors().get(0).getDefaultMessage());
//			}
//
//			User user = userService.getUserByUsername(userWrapper.getUsername());
//
//			String token = UUID.randomUUID().toString();
//			PasswordReset prt = new PasswordReset();
//			prt.setUsername(user.getUsername());
//			prt.setToken(token);
//			prt.setExpiryTime(LocalDateTime.now().plusMinutes(30));
//			prt.setIsConsumed(false);
//			prt.setCreatedTime(LocalDateTime.now());
//
//			boolean isSaved = userService.savePasswordResetToken(prt);
//
//			if (!isSaved) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Please try after some time.");
//			}
//			String resetLink = getBaseURL(request) + "/reset-password?token=" + token;
//			log.info("Forgot password reset link: {} ", resetLink);
//			mailClient.sendForgotPasswordEmail(user.getEmail(), user.getUsername(), resetLink);
//
//			return new RestResponse(HttpStatus.OK.value(), "Reset password link sent to your registered email");
//		} catch (Exception e) {
//			log.error("Error in forgotPassword() in AuthController: " + e.getMessage());
//			return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.exceptionError());
//		}
//	}
//
//	@PostMapping("/validate-token")
//	public RestResponse validateResetToken(@RequestBody Map<String, String> request) {
//
//		log.info("Inside validateResetToken() in AuthController ");
//		try {
//			String token = request.get("token");
//			PasswordReset prt = userService.findByToken(token);
//			if (prt == null) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Invalid token");
//			}
//			if (prt.isConsumed()) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Token already used");
//			}
//			if (prt.getExpiryTime().isBefore(LocalDateTime.now())) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Token expired");
//			}
//			return new RestResponse(HttpStatus.OK.value(), "Token valid");
//		} catch (Exception e) {
//			log.error("Error in validateResetToken() in AuthController: " + e.getMessage());
//			return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.exceptionError());
//		}
//	}
//
//	@PostMapping("/reset-password")
//	public RestResponse resetPassword(@RequestBody Map<String, String> request) {
//
//		log.info("Inside resetPassword() in AuthController ");
//		try {
//			String token = request.get("token");
//			String newPassword = request.get("newPassword");
//
//			if (token == null || newPassword == null || newPassword.length() < 6) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Invalid token or password");
//			}
//
//			PasswordReset prt = userService.findByToken(token);
//			if (prt == null) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Invalid token");
//			}
//			if (prt.isConsumed()) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Token already used");
//			}
//			if (prt.getExpiryTime().isBefore(LocalDateTime.now())) {
//				return new RestResponse(HttpStatus.BAD_REQUEST.value(), "Token expired");
//			}
//
//			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//			String hashedPassword = passwordEncoder.encode(newPassword);
//			userDAO.changePassword(prt.getUsername(), hashedPassword);
//
//			userService.markTokenAsUsed(token, LocalDateTime.now());
//
//			return new RestResponse(HttpStatus.OK.value(), "Password reset successful. Please log in again.");
//		} catch (Exception e) {
//			log.error("Error in resetPassword() in AuthController: " + e.getMessage());
//			return new RestResponse(HttpStatus.BAD_REQUEST.value(), validationProperties.exceptionError());
//		}
//
//	}

}
