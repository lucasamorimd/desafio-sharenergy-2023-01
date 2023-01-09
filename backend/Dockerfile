FROM node

WORKDIR /app

ADD ./ /app

RUN  npm install -g migrate-mongoose

RUN npm install

CMD npm run migrate && npm run start:watch