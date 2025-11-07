FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "wdio", "run", "./configs/wdio.chrome.conf.js"]
