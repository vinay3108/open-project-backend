# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /dist/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Express app is listening on
EXPOSE 3567

# Define the command to start your application
CMD ["node", "main.js"]
