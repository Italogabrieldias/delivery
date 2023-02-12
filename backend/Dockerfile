
FROM openjdk:17

VOLUME /tmp
EXPOSE 8080
ADD ./target/delivery-0.0.1-SNAPSHOT.jar delivery.jar
ENTRYPOINT ["java","-jar","/delivery.jar"]