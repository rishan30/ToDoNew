import React, { useState } from 'react';
import './Login.css';
import { Card, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName === "admin" && password === "admin") {
      onLogin(true);
      navigate("/todo");
    } else {
      setError("Invalid username or password");
    }
  };
  

  return (
    <div className="login-container">
      <Card title="Login" className="login-card">
        <Input placeholder="User name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <Button type="primary" onClick={handleLogin}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
