FROM node

WORKDIR /app

ADD . .

RUN npm install -g typescript

RUN npm install

EXPOSE 3000

CMD ["npm","run", "start:watch"]
