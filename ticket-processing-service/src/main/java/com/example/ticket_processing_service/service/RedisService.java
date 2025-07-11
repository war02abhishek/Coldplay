package com.example.ticket_processing_service.service; 

import java.util.Set; 
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class RedisService {

	@Autowired
	private RedisTemplate<String, String> redisTemplate;

	// Save data to Redis
	public void saveData(String key, String value) {
		redisTemplate.opsForValue().set(key, value);
	}

	// Retrieve data from Redis
	public String getData(String key) {
		return redisTemplate.opsForValue().get(key);
	}

	// Delete data from Redis
	public void deleteData(String key) {
		redisTemplate.delete(key);
	}
	  
    public void setExpiry(String key, long seconds) {
        redisTemplate.expire(key, seconds, TimeUnit.SECONDS);
    }
    
    
    // Sorted Set operations for queue management
    public Boolean zAdd(String key, String value, double score) {
        return redisTemplate.opsForZSet().add(key, value, score);
    }

    public Long zRank(String key, String value) {
        return redisTemplate.opsForZSet().rank(key, value);
    }

    public Set<String> zRange(String key, long start, long end) {
        return redisTemplate.opsForZSet().range(key, start, end);
    }

    public Long zRem(String key, String value) {
        return redisTemplate.opsForZSet().remove(key, value);
    }
    
    public boolean acquireLock(String lockKey, String lockValue, long expireTime) {
        return redisTemplate.opsForValue().setIfAbsent(lockKey, lockValue, expireTime, TimeUnit.SECONDS);
    }
    public void releaseLock(String lockKey, String lockValue) {
        // Only release if the value matches to avoid releasing someone else's lock
        if (lockValue.equals(redisTemplate.opsForValue().get(lockKey))) {
            redisTemplate.delete(lockKey);
        }
    }
}