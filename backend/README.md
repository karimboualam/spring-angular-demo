# ⚙️ Backend — Spring Boot 3 API

This is the **REST API** part of the project, built using **Spring Boot 3** and **PostgreSQL**.

---

## 🧩 Technologies Used
- Java 21
- Spring Boot 3.3.x
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven

---

## 📁 Project Structure

backend/
├── src/main/java/com/example/backend/
│ ├── model/City.java
│ ├── repository/CityRepository.java
│ ├── controller/CityController.java
│ ├── config/DataLoader.java
│ └── BackendApplication.java
├── src/main/resources/application.properties
└── pom.xml

backend/
├── src/main/java/com/example/backend/
│ ├── model/City.java
│ ├── repository/CityRepository.java
│ ├── controller/CityController.java
│ ├── config/DataLoader.java
│ └── BackendApplication.java
├── src/main/resources/application.properties
└── pom.xml

▶️ Run the API
Using Maven:
./mvnw spring-boot:run

Or build the jar:
./mvnw clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar


Runs at http://localhost:8081

🧠 REST Endpoints
Method	Endpoint	Description
GET	/api/cities	Get all cities
POST	/api/cities	Create a new city
GET	/api/cities/{id}	Get one city by ID
PUT	/api/cities/{id}	Update a city
DELETE	/api/cities/{id}	Delete a city
🧪 Example JSON
[
  { "id": 1, "name": "Paris", "region": "Île-de-France", "population": 2148000 },
  { "id": 2, "name": "Lyon", "region": "Auvergne-Rhône-Alpes", "population": 513275 }
]

✅ Test API in Browser

👉 Open: http://localhost:8081/api/cities
or use Postman / curl:

curl http://localhost:8081/api/cities

