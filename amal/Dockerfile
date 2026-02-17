FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci || npm install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","preview","--","--host","0.0.0.0","--port","4322"]
