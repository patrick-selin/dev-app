FROM node:20.11.1-alpine
  
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3005

USER node

CMD npm run dev









# PROD

# FROM mhart/alpine-node:12.16.3

# ARG NODE_ENV=production

# ENV NODE_ENV $NODE_ENV

# COPY ./build /build

# COPY ./package.json /package.json

# COPY ./package-lock.json /package-lock.json

# RUN NODE_ENV=$NODE_ENV npm install

# CMD ["node", "build/server.js"]