import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoPage from './pages/Todopage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TodoPage />
    </React.StrictMode>
);
