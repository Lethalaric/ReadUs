FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine

COPY --from=build-stage /app/dist /etc/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf