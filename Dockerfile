FROM node:14-alpine

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn run build

EXPOSE 80

CMD [ "yarn", "start" ]
