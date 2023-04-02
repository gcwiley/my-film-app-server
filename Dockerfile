# Use an official Node.js runtime as a parent image
FROM node:16

# set the working directory to /app

# Install any needed packages specified in package.json
COPY package*.json ./

RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches

# Path: Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:16
