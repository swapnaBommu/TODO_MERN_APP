# MERN Todo App

A full-stack Todo application built with the MERN stack (MongoDB, Express, React, Node.js) and Vite for the frontend. This app allows users to add, update, complete, and soft-delete todos with a modern UI.

## Features

- Add, update, complete, and delete todos
- Soft delete (todos are marked as deleted, not removed from DB)
- React frontend with Vite and context API
- Express REST API backend
- MongoDB for persistent storage

## Folder Structure

```
MERN_APP/
  client/    # React + Vite frontend
  server/    # Express + MongoDB backend
```

## Local Development

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud, e.g. MongoDB Atlas)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd MERN_APP
```

### 2. Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 3. Configure environment variables

Edit `server/.env`:

```
DB_URL=mongodb://127.0.0.1:27017/mern_app
```

Or use your MongoDB Atlas connection string.

### 4. Start the backend

```bash
cd server
npm run dev
```

### 5. Start the frontend

```bash
cd client
npm run dev
```

The React app runs on http://localhost:5173 and the API on http://localhost:5000.

---

## Hosted Demo

- **Project url (Render):** https://todo-mern-app-1-sm50.onrender.com/

You can use this URL as your API endpoint in the frontend for production deployments.
