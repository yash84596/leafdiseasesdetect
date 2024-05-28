# Stage 1: Build the Node.js application
FROM node:18-alpine3.17 AS build

WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with NGINX
FROM nginx:alpine

# Copy the build output to NGINX's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]