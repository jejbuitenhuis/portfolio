FROM node:14-alpine

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn run build

EXPOSE 80

ENV NUXT_HOST="0.0.0.0"
ENV NUXT_PORT=80

CMD [ "yarn", "start" ]
