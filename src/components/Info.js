import React from 'react';
import { useSelector } from 'react-redux';
import './Info.scss';

function Info() {
  const todosLeft = useSelector((state) => {
    return state.todos.filter(todo => todo.completed === false);
  });

  const counter = todosLeft.length;

  return (
    <div className="info">
      <p className="info__left">{counter} left{counter > 1 ? 's' : '' }</p>
    </div>
  );
}

export default Info;
