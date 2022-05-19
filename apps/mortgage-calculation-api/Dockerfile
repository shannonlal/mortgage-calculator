FROM node:16.14.2-alpine

MAINTAINER Shannon Lal

WORKDIR /app
COPY ./dist/apps/calculator-api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express @nestjs/graphql apollo-server apollo-server-express graphql
CMD node ./main.js