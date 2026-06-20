# 🔐 InternSpark Task 3 - JWT Authentication & Role-Based Access Control

## 📌 Project Overview

This project is developed as part of the **InternSpark Internship - Task 3**.

It demonstrates a complete authentication system using **JWT (JSON Web Token)** with **Role-Based Access Control (RBAC)** integrated into a MERN Stack application.

The project consists of:

- Backend API (Node.js + Express + MongoDB)
- Frontend Application (React + Vite)
- Secure Authentication
- Protected Routes
- Customer & Manager Roles

---

# 📁 Project Structure

```
internspark-task3-authentication
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Features

## Authentication

- User Signup
- User Login
- Password Encryption using bcrypt
- JWT Token Generation
- JWT Verification Middleware

---

## Authorization

Two user roles are implemented:

### 👤 Customer

- View Products
- View Dashboard
- Cannot Add Products
- Cannot Edit Products
- Cannot Delete Products

### 👨‍💼 Manager

- Add Products
- Edit Products
- Delete Products
- View Dashboard
- Full Product Management

---

# 🔒 Security Features

- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)
- Role-Based Access Control
- Token Validation
- Unauthorized Access Prevention

---

# 💻 Technologies Used

## Frontend

- React
- React Router DOM
- Axios
- React Icons
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

---

# ⚙️ Installation

## Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📸 Project Screenshots

The project report includes screenshots for:

- Manager Signup
- Login
- Dashboard
- Product Management
- Customer Restrictions
- GitHub Repository
- Postman API Testing

---

# 📄 Report

The internship report is included in this repository.

```
InternSpark_Task3_Report.docx
```

---

# 👨‍🎓 Developed By

**Gunapalli Chandra Sai Sri**

B.Tech - Information Technology

MERN Stack Developer

---

# 📚 Internship

**InternSpark Internship**

Task 3

JWT Authentication & Role-Based Access Control

---

⭐ Thank you for visiting this repository!