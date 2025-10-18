# 💎 Frontend — Angular 20 + Material

This is the **frontend** built with **Angular 20** (standalone components) and **Angular Material**.

It connects to the Spring Boot backend (`http://localhost:8081`) via HTTP.

---

## 🧩 Technologies
- Angular 20
- Angular Material
- TypeScript 5.9
- RxJS 7.8
- Node.js 22
- Standalone Components (no NgModule)

---

## 📁 Project Structure

frontend/
├── src/
│ ├── app/
│ │ ├── app.ts
│ │ ├── app.html
│ │ ├── app.css
│ │ ├── app.routes.ts
│ │ ├── components/
│ │ │ ├── city-list/
│ │ │ │ └── city-list.ts
│ │ │ └── city-form/
│ │ │ └── city-form.ts
│ │ └── services/
│ │ └── city.ts
├── angular.json
├── package.json
└── tsconfig.json


---

## ▶️ Run the Frontend

```bash
npm install
npm start


Runs on: http://localhost:4200


🌐 API Connection

All backend requests go to:

http://localhost:8081/api/cities


You can configure proxy in proxy.conf.json:

{
  "/api": {
    "target": "http://localhost:8081",
    "secure": false
  }
}


Then run with:

ng serve --proxy-config proxy.conf.json

🧠 Components Overview
Component	Description
CityList	Displays cities in a Material table
CityForm	Form to add or edit cities
CityService	Handles all REST calls to the backend
🖼️ UI Preview

✅ Toolbar navigation (Cities / Add City)

✅ Material table for listing cities

✅ Material form for creating cities

🧱 Build for Production
ng build --configuration production


Output files are generated in dist/.
