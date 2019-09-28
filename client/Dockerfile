FROM node:10.15.0-alpine

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD npm start
