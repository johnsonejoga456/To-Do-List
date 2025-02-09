import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoPage from './pages/TodoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TodoPage />
    </React.StrictMode>
);
