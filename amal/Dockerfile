FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY amal/package*.json ./
RUN npm install

# Copy the rest of the app
COPY amal/ ./

RUN npm run build

EXPOSE 3000
CMD ["npm","run","preview","--","--host","0.0.0.0","--port","4322"]
