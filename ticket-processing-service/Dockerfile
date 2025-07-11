FROM openjdk:11-jdk-slim
WORKDIR /app
COPY build/libs/ticket-processing-service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]
