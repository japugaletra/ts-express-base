FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/service
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && npm build --silent
RUN mv node_modules ../
RUN rm -rf src/ jest* tsconfig*
COPY . .
EXPOSE 80
CMD npm start