FROM node:12-alpine
ARG WORKDIR
RUN mkdir -p /${WORKDIR}/frontend
WORKDIR /${WORKDIR}/frontend

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]