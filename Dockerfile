
## My advice: Dont touch anything here, except the EXPOSE the port
## adn the WORKDIR to select the folder of your project

# Use an official and slim Node.js base image
FROM node:lts-alpine

# Set the working directory for the container
WORKDIR /backend_express

# Copy necessary project files 
COPY package*.json ./

# Install dependencies 
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port on which the app listens
EXPOSE 3000 

# Specify the command to start the application
CMD ["npm", "start"] 