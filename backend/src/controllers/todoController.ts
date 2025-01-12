import { Request, Response } from 'express';
import ToDo from '../models/ToDo';

// Create a new to-do
export const createToDo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newToDo = await ToDo.create({ title, description });
    res.status(201).json(newToDo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create to-do' });
  }
};

// Get all to-dos
export const getToDos = async (req: Request, res: Response) => {
  try {
    const todos = await ToDo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch to-dos' });
  }
};

// Get a single to-do by ID
export const getToDo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const todo = await ToDo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'To-Do not found' });
      }
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch to-do' });
    }
  };
  
  // Update a to-do
  export const updateToDo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, description, isCompleted } = req.body;
      const updatedToDo = await ToDo.findByIdAndUpdate(
        id,
        { title, description, isCompleted },
        { new: true, runValidators: true }
      );
      if (!updatedToDo) {
        return res.status(404).json({ error: 'To-Do not found' });
      }
      res.status(200).json(updatedToDo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update to-do' });
    }
  };
  
  // Delete a to-do
  export const deleteToDo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedToDo = await ToDo.findByIdAndDelete(id);
      if (!deletedToDo) {
        return res.status(404).json({ error: 'To-Do not found' });
      }
      res.status(200).json({ message: 'To-Do deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete to-do' });
    }
  };
  