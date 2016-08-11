# Pull base image.
FROM node
MAINTAINER tech@thirdchannel.com
EXPOSE 3031

# Install Bower & Grunt.
RUN npm install -g bower grunt-cli

# Define working directory.
WORKDIR /data

# Create a copy of the source that we'll be running.
COPY . /data

RUN npm install
RUN bower install
RUN grunt build-dev

CMD grunt
