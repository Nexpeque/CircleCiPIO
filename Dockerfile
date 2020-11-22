FROM node:14.0.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 80

CMD ["npm","start"]