  # Build stage
  FROM node:24-alpine3.21 AS builder
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .

    # Accept build argument
  ARG VITE_API_URL
  ENV VITE_API_URL=$VITE_API_URL
  
  RUN npm run build

  # Production stage
  FROM nginx:alpine
  COPY --from=builder /app/dist /usr/share/nginx/html
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]