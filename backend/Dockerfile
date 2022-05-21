# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /test-docker
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3001