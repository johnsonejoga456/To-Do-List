import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('To-Do List API');
});

export default router;
