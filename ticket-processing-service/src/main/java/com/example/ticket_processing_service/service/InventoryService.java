package com.example.ticket_processing_service.service;

import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ticket_processing_service.dto.Concert;
import com.example.ticket_processing_service.repository.ConcertRepository;

@Service
public class InventoryService {

//	private static final String INVENTORY_KEY_PREFIX = "inventory:";
	private static final Logger log = LoggerFactory.getLogger(InventoryService.class);

//	@Autowired
//	private RedisService redisService;

	@Autowired
	private ConcertRepository concertRepository;

	synchronized public  boolean reserveTicket(String concertId, String quantity) {

		log.info("reserving ticket "+concertId + " and quantity: "+quantity);
		// 1. First check Redis cache (no lock needed for read-only check)
//		String inventoryKey = INVENTORY_KEY_PREFIX + concertId;
//		String cachedSeats = redisService.getData(inventoryKey);
//		if (cachedSeats != null) {
//			int availableSeats = Integer.parseInt(cachedSeats);
//			if (availableSeats < Integer.parseInt(quantity)) {
//				return false; // Fast fail if cache says not enough seats
//			}
//		}

		// 2. If cache is missing/stale, proceed with lock + MongoDB check
//		String lockKey = "lock:" + concertId;
//		String lockValue = UUID.randomUUID().toString();
//		long lockExpireTime = 10; // seconds

		try {
			// Try to acquire lock (only needed for writes)
//			boolean lockAcquired = redisService.acquireLock(lockKey, lockValue, lockExpireTime);
//			if (!lockAcquired) {
//				throw new RuntimeException("System busy, please retry");
//			}

			// 3. Double-check inventory in MongoDB (avoid TOCTOU race)
			Concert concert = concertRepository.findByConcertId(concertId);
			if (concert == null) {
				throw new RuntimeException("Concert not found");
			}
			log.info("concert found");

//			if ((Integer.parseInt(concert.getAvailableSeats()) < (Integer.parseInt(quantity)))) {
//				// Sync cache with DB (to prevent future cache misses)
//				redisService.saveData(inventoryKey, String.valueOf(concert.getAvailableSeats()));
//				return false;
//			}

			if ((concert.getAvailableSeats() < (Integer.parseInt(quantity)))) {
				log.info("concert doesnt have seats avalbl");
				return false;
			}

			// 4. Update MongoDB
			Integer avlbl = (concert.getAvailableSeats()) - Integer.parseInt(quantity);
			concert.setAvailableSeats(avlbl);
			concertRepository.save(concert);
			log.info("MongoDB updation is done");

			// 5. Update Redis cache (critical for performance!)
//			redisService.saveData(inventoryKey, String.valueOf(concert.getAvailableSeats()));

			return true;
		} finally {
//			redisService.releaseLock(lockKey, lockValue);
		}
	}

}