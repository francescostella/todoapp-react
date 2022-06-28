import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './TodoList.scss';

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const counter = todos.length;

  if (counter > 0) {
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    );
  } else {
    return (
      <p className="todo-list__empty">No todos.</p>
    );
  }
}

export default TodoList;
