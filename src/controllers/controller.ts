import { Request, Response } from 'express';
import Todo from '../model/model';

export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  await Todo.find()
    .then((todos) => {
      res.send(todos);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving todos.'
      });
    });
};

export const postTodo = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'No todo found.'
    });
  }

  const todo = new Todo({
    task: req.body.task
  });

  await todo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing todo.'
      });
    });
};

export const deleteTodoById = async (req: Request, res: Response) => {
  await Todo.findOneAndDelete({
    _id: req.params.id
  })
    .then(() => {
      res.send('Todo deleted.');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing todo.'
      });
    });
};

export const updateTodoById = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'No todo found.'
    });
  }

  await Todo.findByIdAndUpdate(req.params.id, req.body, {
    userFindAndModify: false
  })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo not found.'
        });
      } else {
        res.send({
          message: 'Todo updated.'
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while updating todo.'
      });
    });
};
