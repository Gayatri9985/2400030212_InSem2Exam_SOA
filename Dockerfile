FROM node:20

WORKDIR /app

COPY app/package.json .

RUN npm install

COPY app/server.js .

EXPOSE 8080

CMD ["node", "server.js"]