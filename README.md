# docker-test

FROM debian:latest
RUN apt-get update && \
    apt-get install -y nodejs npm git && \ 
    apt-get clean && \
    git clone https://github.com/gmoliva/docker-test && \
    cd docker-test && npm i
COPY .env /docker-test
EXPOSE 3000


ENTRYPOINT ["node", "docker-test/index.js"]
