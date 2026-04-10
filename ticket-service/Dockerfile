FROM eclipse-temurin:11-jre
WORKDIR /app
COPY build/libs/ticket-service-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8089
ENTRYPOINT ["java", "-jar", "app.jar"]
