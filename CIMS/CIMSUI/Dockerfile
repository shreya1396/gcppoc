FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY e2e /usr/src/app/e2e
COPY src /usr/src/app/src
COPY angular.json /usr/src/app/
COPY cors.json /usr/src/app/
COPY package.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY tslint.json /usr/src/app/
RUN npm install -g @angular/cli
#RUN npm install -g @angular-devkit/build-angular
# RUN ng build

# start app
#CMD ng serve --host 0.0.0.0
