import React from 'react';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onDelete, onToggle }) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
      <div className="form-check">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="form-check-input"
        />
        <label
          className={`form-check-label ${completed ? 'text-decoration-line-through text-muted' : ''}`}
        >
          {title}
        </label>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
