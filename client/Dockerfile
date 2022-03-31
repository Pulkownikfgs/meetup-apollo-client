FROM node:16.14 AS package

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM package AS build

COPY .graphqlrc.yml tsconfig.json schema.graphql ./
COPY src/ ./src
RUN yarn generate:types

COPY vite.config.ts index.html ./
CMD yarn start