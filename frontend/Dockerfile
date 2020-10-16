FROM node:12.16.1

WORKDIR /${WORKDIR}

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]
