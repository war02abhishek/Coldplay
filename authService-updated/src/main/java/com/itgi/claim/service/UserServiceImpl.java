package com.itgi.claim.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.itgi.claim.marine.repository.UserRepository;
import com.itgi.claim.wrapper.User;
import com.itgi.claim.wrapper.UserPrincipal;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
            

        return new UserPrincipal(user); // wrap it for Spring Security
    }

	@Override
	public User save(UserPrincipal user) {
		return userRepository.save(user.getUser());
	}

}
