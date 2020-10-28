FROM node:12-alpine
ARG WORKDIR

WORKDIR /usr/src/${WORKDIR}

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]