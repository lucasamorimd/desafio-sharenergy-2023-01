FROM node

WORKDIR /app

ADD . .

RUN npm install -g typescript

RUN  npm install -g migrate-mongoose

RUN npm install

EXPOSE 3000

CMD ["npm","run", "start:watch"]
