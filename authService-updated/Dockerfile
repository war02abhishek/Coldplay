FROM eclipse-temurin:11-jre
WORKDIR /app
COPY build/libs/authService-updated-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 7777
ENTRYPOINT ["java", "-jar", "app.jar"]

