import React from "react";
import { Button } from "antd";
import "./Header.css";

const Header = ({ onLogout }) => (
  <div className="header">
    <h2>ToDo App</h2>
    <Button type="link" onClick={onLogout} className="logout-btn"> Logout </Button>
  </div>
);

export default Header;
