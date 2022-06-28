import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, toggleTodo, favTodo, deleteTodo } from '../redux/todosSlice';
import './TodoItem.scss';

function TodoItem({ todo }) {
  const [showButtons, setShowButtons] = useState();
  const [editMode, setEditMode] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = (event, id) => {
    dispatch(
      toggleTodo({
        id,
      })
    );
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

  const onToggleEditTodo = (event, id) => {
    event.preventDefault();
    setEditMode(!editMode);
  };

  const onBlurEditTodo = (event, id) => {
    saveEditTodo(event, id);

    if (!event.target.matches('.todo-item__description--edit')) {
      setEditMode(false);
    }
  }
  
  const onKeyDownEditTodo = (event, id) => {
    if (event.code === 'Escape' || event.code === 'Enter') {
      saveEditTodo(event, id);
      setEditMode(false);
    }
  };
  
  const onFavTodo = (event, id) => {
    event.preventDefault();
    dispatch(
      favTodo({
        id,
      })
      );
      
      setShowButtons(false);
    };
    
  const saveEditTodo = (event, id) => {
    const text = event.target.value;

    dispatch(
      editTodo({
        id,
        text,
      })
    );
  };

  return (
    <li
      className={`todo-item 
        ${todo.completed ? 'todo-item--completed' : ''}
        ${todo.favorite ? 'todo-item--fav' : ''}
        ${showButtons ? 'todo-item--show' : ''}
        ${editMode ? 'todo-item--edit' : ''}
      `}
    >
      <label className="todo-item__label">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => onChangeHandler(event, todo.id)}
        />
        <span className="todo-item__checkmark"></span>
        <span className="todo-item__description todo-item__description--view">
          {todo.text}
        </span>
        <input
          className="todo-item__description todo-item__description--edit"
          type="text"
          defaultValue={todo.text}
          onBlur={(event) => onBlurEditTodo(event, todo.id)}
          onKeyDown={(event) => onKeyDownEditTodo(event, todo.id)}
        />
      </label>
      <div className="todo-item__buttons">
        <button
          className="todo-item__button todo-item__button--delete"
          onClick={(event) => onRemoveTodo(event, todo.id)}
        >
          ❌
        </button>
        <button
          className="todo-item__button todo-item__button--edit"
          onClick={(event) => onToggleEditTodo(event, todo.id)}
        >
          ✏️
        </button>
        <button
          className="todo-item__button todo-item__button--fav"
          onClick={(event) => onFavTodo(event, todo.id)}
        >
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
