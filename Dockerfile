# Pull base image.
FROM node:alpine
MAINTAINER tech@thirdchannel.com
EXPOSE 3031

WORKDIR /data
COPY . /data

# Install Bower & Grunt
RUN npm install -g bower grunt

# Install application dependencies
RUN npm install

CMD grunt nodemon
