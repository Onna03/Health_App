# Fitness Tracker App 🏋️‍♀️

A full-stack **MERN** web application to track workouts, view statistics, and manage fitness routines in a modern, dark-themed interface.

---

## **Features**

- **User Authentication:** Register and login securely using JWT.
- **Workout Management:** Add, view, edit, and delete workouts with details like type, duration, calories, and date.
- **Statistics:** View personal workout statistics including total workouts, most common workout type, and total duration.
- **Responsive UI:** Mobile-friendly design with a modern dark theme.
- **Smooth Navigation:** SPA routing with React Router.

---

## **Tech Stack**

- **Frontend:** React, Vite, React Router, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment Ready:** Backend and frontend can be run locally or deployed to platforms like Render, Vercel, or Heroku.

---

## **Screenshots**

![Home Page](screenshots/home.png)
![Workouts Page](screenshots/workouts.png)
![Add Workout Page](screenshots/add-workout.png)
![Stats Page](screenshots/stats.png)

> Replace screenshots above with your actual images from the project.

---

## **Installation**

### **Backend**
1. Navigate to the backend folder:
```bash
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file with:

ini
Copy code
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=5000
Start the server:

bash
Copy code
npm run dev
Frontend
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open http://localhost:5173 (or the port Vite shows) in your browser.

Folder Structure
css
Copy code
fitness-app/
├─ backend/
│  ├─ models/
│  ├─ routes/
│  ├─ middleware/
│  ├─ server.js
│  └─ ...
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ App.css
└─ README.md
Usage
Register a new account or login.

Add workouts via the "Add Workout" page.

View all workouts on the "Workouts" page.

See personal statistics on the "Stats" page.

Logout when done.

Future Improvements
Add graphs using Chart.js for visual statistics.

Implement profile customization.

Add social features like sharing workouts with friends.

Demo
Attach a short video demo or GIF to showcase the app in action.

License
MIT License © 2025 Youmna Elakhras
