# YouTube Clone Backend

This is the backend for a YouTube clone built with Node.js and Express.  
It handles core features such as user authentication, video upload, and playlist management.  
MongoDB is used for storing data, and JWT is used for secure authentication.

---

## Features

- User signup/login with JWT authentication
- Upload and manage videos (title, description, etc.)
- Create and manage playlists
- MongoDB integration for persistent storage
- Secure session handling with JWT

---

## Tech Stack

- Node.js + Express.js  
- MongoDB with Mongoose  
- JWT for authentication  
- Multer for file uploads  

---

## Project Structure
├── config/ # DB connection and config files
├── controllers/ # Route handlers
├── models/ # Mongoose schemas
├── routes/ # API routes
├── middleware/ # Auth middleware
├── uploads/ # Uploaded videos (if stored locally)
├── app.js # Main server file
└── package.json



---

## Features

- Authentication
  - Register and login users
  - JWT-based secure authentication

- Video Handling
  - Upload video files
  - Store metadata in MongoDB

- Playlist Management
  - Create playlists
  - Add or remove videos

- Database
  - MongoDB with Mongoose for schema modeling

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-clone-backend.git](https://github.com/AAKASHGUPTA2425/backend-express-and-mongo-db-
   cd youtube-clone-backend/C_project_1

Install dependencies:
npm install


Create a .env file in C_project_1/:
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key


Start the server:
npm start

