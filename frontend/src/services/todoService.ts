import axios from "axios";
import API_BASE_URL from "../config/api";
import { Todo } from "../types/todo";

// Ensure 'Todo' is explicitly exported
export type { Todo };

// Fetch all to-dos
export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axios.get<Todo[]>(`${API_BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

// Fetch a single to-do by ID
export const fetchTodoById = async (id: string): Promise<Todo> => {
  try {
    const response = await axios.get<Todo>(`${API_BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    throw error;
  }
};

// Create a new to-do
export const createTodo = async (todo: Omit<Todo, "_id">): Promise<Todo> => {
  try {
    const response = await axios.post<Todo>(`${API_BASE_URL}/todos`, todo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// Update a to-do (now uses Partial<Todo> for flexibility)
export const updateTodo = async (id: string, todo: Partial<Todo>): Promise<Todo> => {
  try {
    const response = await axios.put<Todo>(`${API_BASE_URL}/todos/${id}`, todo);
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a to-do
export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/todos/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
