import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './TodoList.scss';

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
