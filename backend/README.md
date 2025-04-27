RBAC Blog Platform - Backend
This is the backend of the RBAC Blog Platform, built with Node.js, Express, MongoDB, and JWT for authentication. It provides APIs for user authentication and post management with role-based access control (RBAC).
Features

User signup and login with JWT authentication.
Role-based access: Users view posts, admins create posts.
APIs:
POST /api/auth/signup: Create a user (user/admin role).
POST /api/auth/login: Authenticate and return JWT.
GET /api/posts: Fetch all posts.
POST /api/posts: Create a post (admin only).


MongoDB for data storage.

Setup

Navigate to backend/:cd backend


Install dependencies:npm install


Create a .env file with:JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string


Start the server:npm start


The server runs at http://localhost:5000.

Dependencies

express: ^4.21.0
mongoose: ^8.7.0
jsonwebtoken: ^9.0.2
bcryptjs: ^2.4.3

Environment

MongoDB is required. Use a local instance or MongoDB Atlas.
Set MONGODB_URI in .env (e.g., mongodb://localhost/rbac-blog or Atlas URI).
Set JWT_SECRET to a secure key.

Known Issues

No significant backend vulnerabilities reported.
Ensure MongoDB is running and MONGODB_URI is correct.

Project Structure

models/: Contains User.js and Post.js for MongoDB schemas.
routes/: Contains auth.js (authentication) and post.js (posts).
middleware/: Contains auth.js for JWT verification.
index.js: Main server file.

