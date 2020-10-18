FROM node:12-alpine
RUN mkdir -p /${WORKDIR}/frontend
WORKDIR /${WORKDIR}/frontend

COPY ["package.json", "yarn.lock", "./"]
RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]