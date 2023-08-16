FROM node:16.20.2-alpine

MAINTAINER Shannon Lal

WORKDIR /app
COPY ./dist/apps/calculator-api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js