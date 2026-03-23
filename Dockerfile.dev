FROM node:22-bookworm-slim

WORKDIR /app

COPY package*.json .
RUN npm ci

ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=100

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
