FROM openjdk:17

ENV ENVIRONMENT=prod

MAINTAINER Markus Zahn <emmzet@web.de>

ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]