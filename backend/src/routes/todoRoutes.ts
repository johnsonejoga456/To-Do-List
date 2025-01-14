import { Router } from 'express';
import {
  createToDo,
  getToDos,
  getToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/todoController';

const router = Router();

router.post('/todos', createToDo); // Create a to-do
router.get('/todos', getToDos); // Get all to-dos
router.get('/todos/:id', getToDo); // Get a single to-do
router.put('/todos/:id', updateToDo); // Update a to-do
router.delete('/todos/:id', deleteToDo); // Delete a to-do

export default router;
