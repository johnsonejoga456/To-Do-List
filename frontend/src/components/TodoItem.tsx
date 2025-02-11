import React from "react";
import { Todo } from "../types/todo";
import { deleteTodo, updateTodo } from "../services/todoService";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggleComplete: (todo: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggleComplete }) => {
  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id!);
      onDelete(todo._id!);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleToggleComplete = async () => {
    try {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      console.log("Updating todo:", updatedTodo); // Debug log
      await updateTodo(todo._id!, updatedTodo);
      onToggleComplete(updatedTodo);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="card my-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className={`card-title ${todo.isCompleted ? "text-decoration-line-through text-muted" : ""}`}>
            {todo.title}
          </h5>
          <p className="card-text text-muted">{todo.description}</p>
        </div>
        <div className="btn-group">
          <button
            onClick={handleToggleComplete}
            className="btn btn-sm btn-secondary"
          >
            {todo.isCompleted ? "Undo" : "Complete"}
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
