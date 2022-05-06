import React from 'react';

function TodoListItem({ todo }) {
  return (
    <li className="todo-list-item">
      <h3 className="todo-list-item__text">{todo.text}</h3>
      <div className="todo-list-item__container">
        <button className="todo-list-item__button todo-list-item__button--completed">
          Mark as Completed
        </button>
        <button className="todo-list-item__button todo-list-item__button--remove">
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
