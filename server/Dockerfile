FROM node:22

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build --workspace @focus/server

RUN npm prune --production

RUN rm -r client

EXPOSE 3532

CMD ["node", "server/dist/server/src/index.js"]
