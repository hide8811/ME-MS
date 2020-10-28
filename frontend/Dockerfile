FROM node:12-alpine
ARG WORKDIR

WORKDIR /${WORKDIR}/frontend

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]