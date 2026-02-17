import express from 'express';
import  cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/database.js';
import todoRoutes from './src/features/todos/todo.routes.js'

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});