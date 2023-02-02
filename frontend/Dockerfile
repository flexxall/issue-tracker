FROM node:alpine
# Create app directory
WORKDIR /usr/app

# Copy app source code
COPY package.json ./
COPY ./ ./

# Install app dependencies
RUN npm i

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]
