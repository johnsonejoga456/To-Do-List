import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import { getTodos, addTodo, deleteTodo } from '../services/todoService';

interface Todo {
    _id: string;
    title: string;
    completed: boolean;
}

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getTodos();
            setTodos(fetchedTodos);
        };
        fetchTodos();
    }, []);

    const handleAddTodo = async (title: string) => {
        const newTodo = await addTodo({ title, completed: false });
        setTodos((prev) => [...prev, newTodo]);
    };

    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
        setTodos((prev) => prev.filter((todo) => todo._id !== id));
    };

    const handleToggleTodo = async (id: string) => {
        const updatedTodos = todos.map((todo) =>
            todo._id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        // Optionally, update the backend here if toggling is implemented server-side
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <AddTodo onAdd={handleAddTodo} />
            <div className="p-4">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        id={todo._id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={handleDeleteTodo}
                        onToggle={handleToggleTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoPage;
