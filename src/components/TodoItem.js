import React from 'react';
import './TodoItem.scss';

function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input className="todo-item__checkbox" type="checkbox" />
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
