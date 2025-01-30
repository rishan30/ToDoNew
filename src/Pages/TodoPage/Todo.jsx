import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
import TodoDetailsPopup from '../../Components/TodoDetailsPopup/TodoDetailsPopup';
import { fetchTodos } from '../../utils/api';  
import './Todo.css';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const currentTodos = todos.slice((currentPage - 1) * todosPerPage, currentPage * todosPerPage);

  const handleTodoClick = (id) => {
    const selected = todos.find(todo => todo.id === id);
    setSelectedTodo(selected);
  };

  const handleClosePopup = () => setSelectedTodo(null);

  return (
    <div className="todo-page">
      <header className="todo-header">
        <h2>ToDo List</h2>
      </header>

      <Table
        className="todo-table"
        columns={[
          { title: 'Title', dataIndex: 'title', key: 'title' },
          { title: 'Status', dataIndex: 'completed', key: 'completed', render: completed => completed ? 'Completed' : 'Pending' }
        ]}
        dataSource={currentTodos}
        rowKey="id"
        onRow={(record) => ({ onClick: () => handleTodoClick(record.id) })}
        pagination={false}
      />

      <Pagination 
        current={currentPage} 
        total={todos.length} 
        pageSize={todosPerPage} 
        onChange={page => setCurrentPage(page)} 
        hideOnSinglePage
        showSizeChanger={false}
      />

      {selectedTodo && (
        <TodoDetailsPopup 
          todo={selectedTodo} 
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default TodoPage;
