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
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend requests
  credentials: true
}));

// Routes
app.use('/api', todoRoutes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the To-Do List Manager API');
});

// Database Connection
if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('MONGODB connection error:', error.message);
    process.exit(1);
  });
