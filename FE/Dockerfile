# Stage 1: Build frontend
FROM node:17-alpine AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
RUN npm install -g react-scripts@5.0.0
RUN npm install react-slick slick-carousel
COPY . .
RUN npm run build

# Stage 2: Create production-ready image with Nginx
FROM nginx:stable-alpine
# Copy built frontend from the build stage
COPY --from=build /app/build /usr/share/nginx/html
# Copy Nginx configuration file to proxy requests to the backend
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
