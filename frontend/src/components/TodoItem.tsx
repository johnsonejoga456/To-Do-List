import React, { useState } from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedFields: Partial<Todo>) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdate(todo._id!, { title: newTitle, description: newDescription });
    setEditing(false);
  };

  return (
    <div className="card my-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        {editing ? (
          <div className="w-100">
            <input
              className="form-control mb-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              className="form-control mb-2"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div>
              <h5 className={`card-title ${todo.isCompleted ? "text-decoration-line-through text-muted" : ""}`}>
                {todo.title}
              </h5>
              <p className="card-text text-muted">{todo.description}</p>
            </div>
            <div className="btn-group">
              <button
                onClick={() => onUpdate(todo._id!, { isCompleted: !todo.isCompleted })}
                className="btn btn-sm btn-secondary"
              >
                {todo.isCompleted ? "Undo" : "Complete"}
              </button>
              <button className="btn btn-sm btn-primary" onClick={() => setEditing(true)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo._id!)}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;