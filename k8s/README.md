# 🐳 DevOps — Docker & Kubernetes Setup

This folder contains **containerization and deployment** configurations for the project.

---

## 🧩 Docker Setup

### 1️⃣ Backend Dockerfile
`backend/Dockerfile`
```dockerfile
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]

2️⃣ Frontend Dockerfile

frontend/Dockerfile

FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build -- --configuration production

FROM nginx:alpine
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html
EXPOSE 80

3️⃣ PostgreSQL via Docker
docker run --name postgres-demo \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=demo \
  -p 5432:5432 -d postgres:15
  