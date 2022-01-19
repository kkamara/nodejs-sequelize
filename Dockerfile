# syntax=docker/dockerfile:1

FROM node:17

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

CMD ["npm", "run", "start"]
