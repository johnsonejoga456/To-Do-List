import React, { useState } from 'react';

interface AddTodoProps {
    onAdd: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title.trim());
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center p-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
                className="flex-grow p-2 border rounded mr-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add
            </button>
        </form>
    );
};

export default AddTodo;
