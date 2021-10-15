FROM node:16

CMD echo "------"
CMD echo "UDPtime is a hobby project built to ping UDP protocols like Steam dedicated servers and display status using Uptime Kuma."
CMD echo "https://github.com/mattiasghodsian/udptime"
CMD echo "------"

# Create app directory
WORKDIR /usr/src/app

# Copy & Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3003
CMD [ "node", "index.js" ]
