# syntax=docker/dockerfile:1
FROM node:16-alpine
WORKDIR /frontend
COPY . .
RUN yarn install --production
RUN yarn build
RUN yarn global add serve
CMD ["serve", "-s", "build"]