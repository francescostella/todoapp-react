import React, { useState } from 'react';
import './TodoItem.scss';

function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const onChangeHandler = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
      <label className="todo-item__label">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={completed}
          onChange={onChangeHandler}
        />
        <span className="todo-item__checkmark"></span>
        <span className="todo-item__description todo-item__description--view">
          {todo.text}
        </span>
        <input
          className="todo-item__description todo-item__description--edit"
          type="text"
          defaultValue="{todo.text}"
        />
      </label>
      <div className="todo-item__buttons">
        <button className="todo-item__button todo-item__button--delete">
          ❌
        </button>
        <button className="todo-item__button todo-item__button--edit">
          ✏️
        </button>
        <button className="todo-item__button todo-item__button--fav">
          <span className="todo-item__star todo-item__star--empty">☆</span>
          <span className="todo-item__star todo-item__star--filled">★</span>
        </button>
      </div>
      <button className="todo-item__info">ℹ️</button>
    </li>
  );
}

export default TodoItem;
