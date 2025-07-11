FROM openjdk:11-jdk-slim
WORKDIR /app
COPY build/libs/service-registry-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8761
ENTRYPOINT ["java", "-jar", "app.jar"]
