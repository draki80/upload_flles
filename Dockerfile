FROM php:7.3-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql
RUN apk update && apk add --no-cache \
    bash \