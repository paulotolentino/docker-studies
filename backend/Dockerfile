# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /backend
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]