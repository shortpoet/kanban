# VSCode
FROM node:12.18-alpine
# nodejs.org
# FROM node:12

# VSCode && nodejs.org
# Create app directory
WORKDIR /usr/src/app

# nodejs.org
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json

# custom
COPY package*.json *.lock.json ./

# VSCode and nodejs.org
# RUN npm install

# custom
RUN yarn install && mv node_modules ../
# to suppress warnings
# [ "/bin/bash", "-c", "yarn install 2> >(grep -v warning 1>&2)"]

# nodejs.org
# If you are building your code for production
# https://docs.npmjs.com/cli/install
# RUN npm ci --only=production
# https://stackoverflow.com/questions/58482655/what-is-the-closest-to-npm-ci-in-yarn
# RUN yarn install --frozen-lockfile

# VSCode
# ENV NODE_ENV production
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../

# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#env
ENV PATH /usr/node_modules/.bin:$PATH

# VSCode && nodejs.org
# Bundle app source
# both
COPY . .

# VSCode && nodejs.org
EXPOSE 5000

# nodejs.org
# CMD [ "node", "server.js" ]

# VSCode
# CMD npm start

# custom
# in docker-compose