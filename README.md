# 🎵 Coldplay Ticket Booking System

A microservices-based ticket booking platform built for high-traffic concert ticket management.

---

## 🏗️ Architecture Overview

```
User Browser
     ↓
Frontend (Angular + nginx) :80
     ↓
API Gateway :8080
     ↓
┌────────────────────────────────────────┐
│           Docker Network               │
│                                        │
│  Service Registry (Eureka) :8761       │
│  Auth Service              :7777       │
│  Ticket Service            :8089       │
│  Ticket Processing Service :8082       │
│  Notification Service      :8083       │
│  Kafka + Zookeeper         :9092       │
└────────────────────────────────────────┘
         ↓
    MongoDB Atlas (Cloud DB)
```

---

## ✅ Features Completed

### Frontend
- Login / Authentication with JWT
- View all live concerts
- Book ticket for a concert
- View ticket booking status

### Admin
- Create a concert
- Update seats of a concert
- Get concert details

### User
- Get all concerts
- Get concert details
- Book ticket for a particular concert
- Get ticket booking status

---

## ⚙️ Backend Microservices

### 1. Service Registry (`service-registry` :8761)
- Eureka Server for service discovery
- All microservices register here on startup
- API Gateway uses it to route requests via `lb://service-name`

### 2. API Gateway (`api-gateway` :8080)
- Single entry point for all client requests
- Routes:
  - `/authgateway/**` → auth-service :7777
  - `/ticketgateway/**` → ticket-service :8089
  - `/ticketprocessing/**` → ticket-processing-service :8082
- Load balanced via Spring Cloud LoadBalancer

### 3. Auth Service (`auth-service-updated` :7777)
- User registration and login
- JWT token generation and validation
- Spring Security with MongoDB user store

### 4. Ticket Service (`ticket-service` :8089)
- Accepts ticket booking requests from users
- Pushes requests into Kafka queue for async processing
- Manages concert data (CRUD) in MongoDB

### 5. Ticket Processing Service (`ticket-processing-service` :8082)
- Consumes ticket requests from Kafka queue
- Checks seat availability
- Updates MongoDB and cache
- Assigns queue number if no seats available
- Publishes result to notification topics

### 6. Notification Service (`notification-service` :8083)
- Listens to Kafka topics:
  - `Booking-confirmed-topic`
  - `Booking-waitlisted-topic`
  - `Booking-error-topic`
- Sends email notifications via Gmail SMTP
- Saves booking results to MongoDB

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Angular 19 | Frontend UI |
| Spring Boot 2.7 | Backend microservices |
| Spring Cloud Gateway | API routing |
| Netflix Eureka | Service discovery |
| Apache Kafka | Async message queue for traffic handling |
| Zookeeper | Kafka cluster coordination |
| MongoDB Atlas | Cloud database |
| Redis | Caching and queue number tracking (in progress) |
| Docker | Containerization |
| nginx | Frontend static file serving + API proxy |

---

## 🚀 Running Locally with Docker

### Prerequisites
- Docker Desktop
- Java 11
- Node.js 18+

### Steps

**1. Build all JARs:**
```bash
cd service-registry && gradlew clean build -x test
cd authService-updated && gradlew clean build -x test
cd ticket-service && gradlew clean build -x test
cd ticket-processing-service && gradlew clean build -x test
cd notification-service && gradlew clean build -x test
cd api-gateway-updated/api-gateway && gradlew clean build -x test
```

**2. Build all Docker images:**
```bash
docker build -t service-registry ./service-registry
docker build -t auth-service-updated ./authService-updated
docker build -t ticket-service ./ticket-service
docker build -t ticket-processing-service ./ticket-processing-service
docker build -t notification-service ./notification-service
docker build -t api-gateway-updated ./api-gateway-updated/api-gateway
```

**3. Start everything:**
```bash
docker-compose up -d
```

**4. Access:**
- Frontend: http://localhost:80
- API Gateway: http://localhost:8080
- Eureka Dashboard: http://localhost:8761

---

## 🐳 Docker Hub Images

All images are published at: `18219526/coldplay-*:1.0`

```bash
docker pull 18219526/coldplay-service-registry:1.0
docker pull 18219526/coldplay-auth-service:1.0
docker pull 18219526/coldplay-ticket-service:1.0
docker pull 18219526/coldplay-ticket-processing:1.0
docker pull 18219526/coldplay-notification-service:1.0
docker pull 18219526/coldplay-api-gateway:1.0
```

---

## ☁️ Deployment (AWS EC2)

```
1. Launch EC2 (Ubuntu, t3.medium minimum)
2. Open Security Group ports: 22, 80, 8080, 8761
3. SSH into EC2
4. Install Docker + Docker Compose
5. Copy docker-compose.yml to EC2
6. docker-compose up -d
7. Access via EC2 Public IP
```

---

## 🔄 Kafka Flow

```
User books ticket
      ↓
ticket-service → publishes to Kafka → ticket-request-topic
      ↓
ticket-processing-service → consumes → checks seats → updates DB
      ↓
publishes result to:
  Booking-confirmed-topic   → notification-service → sends confirmation email
  Booking-waitlisted-topic  → notification-service → sends waitlist email
  Booking-error-topic       → notification-service → sends failure email
```

---

## 🔮 Pending / Future Work

- [ ] Fix API Gateway routing for auth-service (currently bypassed via direct :7777 call)
- [ ] Redis integration for caching seat counts and queue numbers
- [ ] Kubernetes deployment (Helm charts)
- [ ] Admin panel in frontend for concert management
- [ ] Real-time ticket status updates via WebSocket

---

## 📸 Screenshots


**ScreenShots**
<img width="1345" height="269" alt="image" src="https://github.com/user-attachments/assets/0621c84d-4adb-4d9c-bdd9-8a59cff9a280" />
<img width="1364" height="369" alt="image" src="https://github.com/user-attachments/assets/b8c30367-875d-4bba-888f-24e081e0efc4" />

<img width="1120" height="543" alt="image" src="https://github.com/user-attachments/assets/8a5e7ebe-de31-46a6-9293-8ce476b7d020" />


Creates a private network (like coldplay-latest_default)
Assigns each container an internal IP (e.g., 172.18.0.x)
Services talk to each other using these internal IPs or service names
<img width="1336" height="313" alt="image" src="https://github.com/user-attachments/assets/17f6c2fc-47c2-4dc9-a3cc-233ae1afd66b" />




Now localhost:8080 Works for You
we are exposing ports like this in docker-compose.yml:
ports:
  - "8080:8080"
This means:
Docker maps container port 8080 → host machine port 8080
You can access your API Gateway at http://localhost:8080 from your browser
<img width="661" height="127" alt="image" src="https://github.com/user-attachments/assets/15aba8ef-829a-4566-b4e3-9964ffbec2cf" />
<img width="452" height="96" alt="image" src="https://github.com/user-attachments/assets/9bfe9702-06f2-42d0-ae67-8366ec5ad1ed" />

Locally tested and now ready for deployment 


<img width="1336" height="368" alt="image" src="https://github.com/user-attachments/assets/bdc25bea-ec90-4a86-91e7-87fad15a8dfb" />


Crested EC2 instance ,SSH into it and then install Docker and Docker compose over it and checked
<img width="565" height="436" alt="image" src="https://github.com/user-attachments/assets/0cda5814-f012-4c47-a5ad-ef6d7ea6bbb0" />


<img width="872" height="515" alt="image" src="https://github.com/user-attachments/assets/6586148d-8b70-4e38-b103-c8cf2b4dc1f4" />


EC2 instance need to have larger resources else it will crash just after containers start.
<img width="1094" height="629" alt="image" src="https://github.com/user-attachments/assets/e954b688-40d5-4863-ae90-c0e684896318" />

