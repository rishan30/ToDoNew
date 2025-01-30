import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/LoginPage/Login'; 
import Todo from './Pages/TodoPage/Todo'; 
import Header from './Components/Header/Header';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);  // Set authentication to true or false based on login status
  };

  const handleLogout = () => {
    setIsAuthenticated(false);  // Reset authentication on logout
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      
      <Route 
        path="/todo" 
        element={isAuthenticated ? (
          <>
            <Header onLogout={handleLogout} />
            <Todo />
          </>
        ) : (
          <Navigate to="/" />
        )} 
      />
    </Routes>
  );
};


export default App;
