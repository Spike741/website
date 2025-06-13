# Use official Node.js LTS image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
COPY bun.lockb* .  # Optional: if you use bun, else skip
RUN npm install

# Copy rest of the app
COPY . .

# Build the Vite app
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy build output to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default Nginx config and add your own (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
