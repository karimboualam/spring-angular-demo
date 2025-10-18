# 🌍 Full-Stack Demo — Spring Boot 3 + Angular 20 + PostgreSQL

A complete full-stack web application for **City Management**, featuring:

- 🧩 **Backend:** Spring Boot 3 (Java 21)
- 💎 **Frontend:** Angular 20 + Angular Material
- 🗄️ **Database:** PostgreSQL
- 🐳 **DevOps:** Docker & Kubernetes-ready

---

## ⚙️ Architecture Overview


spring-angular-demo/
├── backend/ # Spring Boot REST API
├── frontend/ # Angular 20 application (Material Design)
├── k8s/ # Kubernetes manifests 
└── README.md # Global documentation

---

## 🚀 Quick Start

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/spring-angular-demo.git
cd spring-angular-demo
2️⃣ Start PostgreSQL

You can use local PostgreSQL or Docker:

docker run --name postgres-demo \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=demo \
  -p 5432:5432 -d postgres:15

3️⃣ Run the Backend
cd backend
./mvnw spring-boot:run


Runs on 👉 http://localhost:8081

4️⃣ Run the Frontend
cd ../frontend
npm install
npm start


Runs on 👉 http://localhost:4200

🧩 API Overview
Method	Endpoint	Description
GET	/api/cities	List all cities
POST	/api/cities	Add a new city
GET	/api/cities/{id}	Get a specific city
DELETE	/api/cities/{id}	Delete a city
🧠 Tech Stack
Layer	Technology
Backend	Java 21, Spring Boot 3, JPA, Hibernate
Frontend	Angular 20, TypeScript 5.9, Angular Material
Database	PostgreSQL 15
DevOps	Docker, Kubernetes (optional)
🧑‍💻 Author

Karim — Full Stack Developer
💼 Stack: Java | Spring | Angular | Docker | PostgreSQL