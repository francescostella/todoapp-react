import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
