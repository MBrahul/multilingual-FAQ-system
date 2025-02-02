# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /index

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 5500

# Run the application
CMD ["node", "index.js"]
