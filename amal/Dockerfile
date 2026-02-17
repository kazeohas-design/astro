FROM node:20-alpine
WORKDIR /app

COPY amal/package*.json ./
RUN npm install

COPY amal/ ./
RUN npm run build

EXPOSE 4322
CMD ["npm","run","preview","--","--host","0.0.0.0","--port","4322"]
