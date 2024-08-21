FROM node:18-alpine

WORKDIR /app

COPY client/public/ /app/public
COPY client/src/ /app/src
COPY client/package.json /app

RUN npm install

CMD ["npm", "start"]