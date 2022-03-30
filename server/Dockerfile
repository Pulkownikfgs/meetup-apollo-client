FROM node:16.14 AS package

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM package AS build

COPY codegen.yml tsconfig.json ./
COPY src/ ./src
RUN yarn generate:types

CMD yarn migrate && yarn start:watch