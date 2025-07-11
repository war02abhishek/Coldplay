package com.itgi.claim.marine.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itgi.claim.wrapper.User;

public interface UserRepository extends MongoRepository<User, String> {
	User findByUsername(String username);

}
