# InternSpark Task 3 - JWT Authentication Backend

## 📌 Project Overview

This project is a RESTful API built using Node.js, Express.js, and MongoDB. It provides secure user authentication using JSON Web Tokens (JWT) and bcrypt password hashing, along with role-based authorization.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected API Routes
- Role-Based Access Control (Customer & Manager)
- CRUD Product APIs
- MongoDB Integration
- Error Handling Middleware

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS
- Morgan

---

## 📂 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/signup | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Protected Profile |

### Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| GET | /api/products/:id |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |

---

## 🔐 Security Features

- Passwords are hashed using bcrypt.
- JWT Tokens are generated after successful login.
- Protected routes require valid Bearer Token.
- Role-Based Access Control implemented.

---

## 📦 Installation

```bash
npm install
npm run dev
```

---

## 👩‍💻 Developed By

**Gunapalli Chandra Sai Sri**

InternSpark Internship Task