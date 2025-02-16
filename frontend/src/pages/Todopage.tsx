import React, { useEffect, useState } from "react";
import { fetchTodos, createTodo, deleteTodo, updateTodo } from "../services/todoService";
import { Todo } from "../types/todo";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (newTodo: Omit<Todo, "_id">) => {
    try {
      const createdTodo = await createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (id: string, updatedFields: Partial<Todo>) => {
    try {
      const updatedTodo = await updateTodo(id, updatedFields);
      setTodos((prevTodos) => prevTodos.map((t) => (t._id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">To-Do List</h1>
      <AddTodo onAdd={handleAddTodo} />

      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : (
        <div className="mt-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} onUpdate={handleUpdateTodo} />
            ))
          ) : (
            <p className="text-center text-muted">No to-dos yet. Add one!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoPage;
