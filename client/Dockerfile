FROM node:22

ARG VITE_API_URL=http://localhost:3532

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build --workspace @focus/client

RUN npm prune --production

RUN rm -r server

RUN npm install -g sirv-cli@3.0.1


EXPOSE 8080

CMD ["sirv", "client/dist", "--single", "--host"]
