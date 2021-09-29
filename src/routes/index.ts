import { Router } from 'express';
import {
  getAllTodos,
  postTodo,
  deleteTodoById,
  updateTodoById
} from '../controllers/controller';

const router = Router();

router.get('/getalltodos', getAllTodos);

router.post('/posttodo', postTodo);

router.put('/updatetodo/:id', updateTodoById);

router.delete('/deletetodo/:id', deleteTodoById);

export default router;
