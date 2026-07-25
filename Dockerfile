# Use Ubuntu 26.04 as the base OS image
FROM ubuntu:26.04

# Suppress interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update packages and install Nginx web server
RUN apt-get update && apt-get install -y \
    nginx \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Remove default Nginx welcome page
RUN rm -rf /var/www/html/*

# Copy website code & static image assets to Nginx web root
COPY index.html /var/www/html/
COPY styles.css /var/www/html/
COPY script.js /var/www/html/
COPY images/ /var/www/html/images/

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/sites-available/default

# Expose HTTP Port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
