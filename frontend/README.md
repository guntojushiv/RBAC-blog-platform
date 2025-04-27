RBAC Blog Platform - Frontend
This is the frontend of the RBAC Blog Platform, built with React, React Router, Axios, and Tailwind CSS. It provides a user interface for signing up, logging in, viewing posts, and managing posts (for admins).
Features

User signup and login with role-based navigation (user to /posts, admin to /admin).
Role display on Home, Posts, and Admin pages.
Admin dashboard for creating posts.
Responsive design with Tailwind CSS.
Toast notifications for user feedback using react-toastify.
404 page for invalid routes.

Setup

Navigate to frontend/:cd frontend


Install dependencies:npm install


Start the development server:npm start


Open http://localhost:3000 in your browser.

Dependencies

react: ^18.3.1
react-router-dom: ^7.5.2
axios: ^1.7.7
jwt-decode: ^4.0.0
react-toastify: ^10.0.5
react-scripts: ^5.0.1

Environment

Ensure the backend is running at http://localhost:5000 (see backend/README.md).
No .env file is required for the frontend.

Known Issues

Some npm vulnerabilities (100 moderate, 32 high, 7 critical) remain due to time constraints. Mitigated critical ones with:npm audit fix
npm install uuid@latest svgo@latest eslint@latest @babel/eslint-parser@latest react-scripts@latest joi@latest core-js@latest



Project Structure

src/components/: Contains Login.js, Signup.js, PostList.js, AdminDashboard.js.
src/pages/: Contains Home.js, NotFound.js.
src/App.js: Main app with routing.
src/index.js: Entry point.

