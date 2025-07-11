package com.itgi.claim.service;

import org.springframework.stereotype.Service;

import com.itgi.claim.wrapper.User;
import com.itgi.claim.wrapper.UserPrincipal;

@Service
public interface UserService {

	public User save(UserPrincipal user);

}
