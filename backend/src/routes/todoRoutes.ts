import { Router } from 'express';
import {
  createToDo,
  getToDos,
  getToDo,
  updateToDo,
  deleteToDo,
} from '../controllers/todoController';

const router = Router();

router.post('/todos', createToDo);
router.get('/todos', getToDos);
router.get('/todos/:id', getToDo);
router.put('/todos/:id', updateToDo);
router.delete('/todos/:id', deleteToDo);

export default router;