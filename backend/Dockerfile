# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /backend
COPY . .
RUN yarn install --production
CMD ["yarn", "run", "start-remote"]
EXPOSE 3001