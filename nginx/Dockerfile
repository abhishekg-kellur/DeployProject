# nginx/Dockerfile
FROM nginx:latest

# Copy Nginx config and SSL certificates
COPY nginx.conf /etc/nginx/nginx.conf
COPY server.crt /etc/nginx/certs/server.crt
COPY server.key /etc/nginx/certs/server.key

