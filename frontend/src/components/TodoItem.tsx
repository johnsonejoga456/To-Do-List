import React from 'react';

interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onDelete }) => {
    return (
        <div>
            <input type="checkbox" checked={completed} readOnly />
            <span>{title}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
