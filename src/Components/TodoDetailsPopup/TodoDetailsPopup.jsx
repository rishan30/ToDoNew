// src/Components/TodoDetailsPopup/TodoDetailsPopup.jsx
import React from 'react';
import './TodoDetailsPopup.css';  // Ensure correct CSS import

const TodoDetailsPopup = ({ todo, onClose }) => {
  if (!todo) return null;  // If no todo is provided, don't render anything

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{todo.title}</h2>
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Pending'}</p>
        <button onClick={onClose} className="popup-close-btn">Close</button>
      </div>
    </div>
  );
};

export default TodoDetailsPopup;
