FROM node:15


COPY package.json .

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget && npm install 

# https://github.com/jwilder/dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN  cp -r /node_modules /usr/src/app/

EXPOSE 3000

#CMD [ "node", "index.js" ] 