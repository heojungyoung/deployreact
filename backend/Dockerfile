FROM openjdk

ARG JAR_FILE=./target/backend-0.0.1-SNAPSHOT.war


COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java" , "-jar", "/app.jar"]


