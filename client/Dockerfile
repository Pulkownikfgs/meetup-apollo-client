FROM node:16.14 AS package

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM package AS build

COPY .graphqlrc.yml tsconfig.json ./
COPY src/ ./src
COPY schema/ ./schema
RUN yarn generate:types

COPY vite.config.ts index.html ./
CMD yarn start