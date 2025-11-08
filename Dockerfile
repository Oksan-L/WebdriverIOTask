# Використовуємо свіжу базу (bullseye замість buster)
FROM node:20-bullseye

# Встановлюємо залежності для Chrome
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    xvfb \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Встановлюємо Google Chrome (stable)
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt install -y ./google-chrome-stable_current_amd64.deb \
    && rm google-chrome-stable_current_amd64.deb

# Встановлюємо Allure CLI глобально
RUN npm install -g allure-commandline --force

# Робоча директорія
WORKDIR /app

# Копіюємо файли проекту
COPY package*.json ./
RUN npm ci

COPY . .

# Стандартна команда для запуску тестів у контейнері
CMD ["npm", "run", "test:chrome"]
