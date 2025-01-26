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
        <div className="flex items-center justify-between p-2 border-b">
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                    className="mr-2"
                />
                <span className={completed ? 'line-through text-gray-500' : ''}>
                    {title}
                </span>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
