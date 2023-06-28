FROM node
# COPY ./package.json /var/www/package.json
COPY . /var/www
WORKDIR /var/www
# Front-End
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 2500
ENTRYPOINT [ "npm","start" ]


