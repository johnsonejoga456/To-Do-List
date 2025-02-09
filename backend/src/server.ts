import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', todoRoutes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the To-Do List Manager API');
});

// Database Connection
mongoose
.connect(process.env.MONGODB_URI as string)
.then(() => {
  app.listen(PORT, () => console.log (`server running on port ${PORT}`));
  console.log('Connected to database');
})
.catch((error) => {
  console.error ('MONGODB connection error:', error.message);
})
