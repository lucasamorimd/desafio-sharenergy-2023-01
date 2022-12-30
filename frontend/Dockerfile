FROM node

WORKDIR /app

ADD . .

RUN npm install -g typescript

RUN npm install

EXPOSE 5173

CMD ["npm","run", "dev"]

