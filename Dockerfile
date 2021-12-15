FROM node:14

WORKDIR /home/node/app

COPY . .

RUN npm i yarn

RUN yarn
