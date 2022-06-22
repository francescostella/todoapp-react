import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';
import './TodoItem.scss';

function TodoItem({ todo }) {
  const [showButtons, setShowButtons] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event, id) => {
    dispatch(toggleTodo({
      id
    }))
  };

  const onToggleButtons = (event) => {
    event.preventDefault();
    setShowButtons(!showButtons);
  };

  const onRemoveTodo = (event, id) => {
    event.preventDefault();
    dispatch(
      deleteTodo({
        id,
      })
    );
  };

  return (
    <li
      className={`todo-item 
        ${todo.completed ? 'todo-item--completed' : ''}
        ${showButtons ? 'todo-item--show' : ''}
      `}
    >
      <label className="todo-item__label">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={event => onChangeHandler(event, todo.id)}
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
        <button
          className="todo-item__button todo-item__button--delete"
          onClick={(event) => onRemoveTodo(event, todo.id)}
        >
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
      <button className="todo-item__info" onClick={onToggleButtons}>
        ℹ️
      </button>
    </li>
  );
}

export default TodoItem;
