import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggleComplete: (todo: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onToggleComplete }) => {
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
            onClick={() => onToggleComplete(todo)}
            className="btn btn-sm btn-secondary"
          >
            {todo.isCompleted ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => onDelete(todo._id!)}
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
