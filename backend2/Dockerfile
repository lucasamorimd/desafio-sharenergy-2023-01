FROM node

WORKDIR /app

ADD . .

RUN npm install && npm cache clean --force

WORKDIR /app/dev

EXPOSE 3000

CMD ["npm","run", "start:watch"]
