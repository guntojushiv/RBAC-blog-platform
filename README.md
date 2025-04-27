RBAC Blog Platform
This is a full-stack Role-Based Access Control (RBAC) blog platform built with a React frontend, Node.js/Express.js backend, and MongoDB. The application implements authentication, role-based authorization, and a colorful user interface.
Prerequisites

Node.js v16.x or v18.x
MongoDB (local or Atlas)
npm v6 or higher
Git

Project Structure
rbac-blog-platform/
├── backend/            # Node.js/Express.js backend
├── frontend/           # React frontend
└── README.md           # Root README

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd rbac-blog-platform


Backend Setup:

Navigate to backend/:cd backend


Install dependencies:npm install


Create a .env file:MONGO_URI=mongodb://localhost:27017/rbac-blog
JWT_SECRET=your_jwt_secret_here


Start MongoDB (if local):mongod


Start the backend:npm run dev


Server runs at http://localhost:5000.


Frontend Setup:

Navigate to frontend/:cd frontend


Install dependencies:npm install


Start the frontend with OpenSSL fix:$env:NODE_OPTIONS = "--openssl-legacy-provider"
npm start


Open http://localhost:3000 in your browser.



Architecture and Flow
Overview
The RBAC Blog Platform is a full-stack application with:

Frontend: React with React Router for navigation, styled using Tailwind CSS (CDN).
Backend: Node.js/Express.js with JWT authentication and role-based middleware.
Database: MongoDB storing users and posts.

Data Models

User:
name: String
email: String (unique)
password: String (hashed)
role: String ("user" or "admin")


Post:
title: String
content: String
author: Reference to User
timestamp: Date



Flow

Authentication:
Users sign up (/signup) with name, email, password, and role.
Backend hashes password (bcrypt) and stores user in MongoDB.
Users log in (/login) to receive a JWT, stored in localStorage.


Authorization:
JWT middleware verifies tokens for protected routes (/posts, /admin).
Role middleware restricts post creation/update/deletion to admins.


Frontend Navigation:
Home (/): Welcome page with login/signup buttons.
Login/Signup (/login, /signup): Forms for authentication.
Posts (/posts): Displays all posts in a card grid.
Admin (/admin): Dashboard for creating posts (update/delete TBD).
Navbar: Responsive with links to all routes.


API Interaction:
Frontend uses axios to call backend APIs (/api/auth, /api/posts).
Backend validates JWT and role before processing requests.



Technologies

Frontend: React 17, React Router 5, Tailwind CSS (CDN), Axios
Backend: Node.js, Express.js, MongoDB (Mongoose), JWT, bcrypt, CORS
Database: MongoDB

Features

Authentication: JWT-based login/signup.
Role-Based Access: Admins create posts; users view posts.
UI: Colorful Tailwind CSS interface (blue/orange theme, card layouts, responsive navbar).
API: RESTful endpoints for auth and post management.

Troubleshooting

Frontend:
'react-scripts' is not recognized: Run npm install in frontend/.
UI issues: Verify Tailwind CDN in public/index.html.


Backend:
MongoDB errors: Check MONGO_URI and mongod status.
JWT errors: Ensure JWT_SECRET is set.


General: Use Node.js v16/v18 to avoid OpenSSL issues.

Future Improvements

Add update/delete post functionality in admin dashboard.
Implement email verification for signup.
Upgrade to react-scripts@5.x for better compatibility.
Format code with Prettier for consistency.

