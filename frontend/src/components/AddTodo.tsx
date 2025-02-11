import React, { useState } from "react";
import { Todo } from "../types/todo";
import { createTodo } from "../services/todoService";

interface Props {
  onAdd: (todo: Todo) => void;
}

const AddTodo: React.FC<Props> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.title.trim()) {
      try {
        const createdTodo = await createTodo({
          title: newTodo.title,
          description: newTodo.description,
          isCompleted: false,
        });
        onAdd(createdTodo);
        setNewTodo({ title: "", description: "" });
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-success w-100">
        Add To-Do
      </button>
    </form>
  );
};

export default AddTodo;
