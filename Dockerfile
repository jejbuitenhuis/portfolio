FROM node:14-alpine

ARG NUXT_PORT

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn run build

EXPOSE ${NUXT_PORT}

CMD [ "yarn", "start" ]
