FROM node:22-alpine AS build

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY client/package.json client/
COPY server/package.json server/
COPY shared/package.json shared/

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/server/package.json ./server/

RUN npm install --production

COPY --from=build /usr/src/app/client/dist/ server/public/
COPY --from=build /usr/src/app/server/dist/ ./

RUN mkdir server/data/
RUN chown -R node:node server/data/

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

USER node

EXPOSE 3532

CMD [ "node", "server/src/index.js" ]
