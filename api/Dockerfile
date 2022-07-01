FROM node:17-bullseye-slim

LABEL maintainer="ngocquang994@gmail.com"

EXPOSE 3002

ENV NODE_ENV development

ENV NODE_OPTIONS=--max_old_space_size=2048

ENV PORT 3002

WORKDIR /home/node

COPY . /home/node

RUN yarn install --pure-lockfile --cache-folder .yarn

RUN  yarn build

CMD ["node", "dist/main.js"]