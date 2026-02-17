FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4322

ENV HOST=0.0.0.0
ENV PORT=4322

CMD ["node", "dist/server/entry.mjs"]
