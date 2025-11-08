FROM node:20-bullseye

RUN apt-get update && apt-get install -y \
    wget unzip xvfb \
    fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 \
    libatk1.0-0 libcups2 libdbus-1-3 libdrm2 libgbm1 libnspr4 libnss3 \
    libxcomposite1 libxdamage1 libxrandr2 libxshmfence1 xdg-utils \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt install -y ./google-chrome-stable_current_amd64.deb \
    && rm google-chrome-stable_current_amd64.deb

RUN npm install -g allure-commandline --force

WORKDIR /app
COPY package*.json ./
RUN npm install --save-dev @wdio/devtools-service --legacy-peer-deps
COPY . .

ENV CHROME_ARGS="--headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --disable-extensions"

CMD ["sh", "-c", "npx wdio run ./configs/wdio.chrome.conf.js"]
