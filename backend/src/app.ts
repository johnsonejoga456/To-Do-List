import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import toDoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', toDoRoutes);

export default app;
