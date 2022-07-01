FROM nginx:1.17.2-alpine

LABEL maintainer="nvquang3@cmcglobal.vn"

# RUN apk update && apk add curl

WORKDIR /usr/share/nginx/html
# COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/vhost.conf /etc/nginx/conf.d/default.conf

COPY build .
