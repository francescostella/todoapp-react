import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import './AddForm.scss';

function AddForm() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert('Enter a todo description before adding.');
      setValue('');
      return;
    }

    dispatch(
      addTodo({
        text: value,
      })
    );
    
    setValue('');
  };

  return (
    <form className="add-form">
      <input
        className="add-form__input"
        type="text"
        autoFocus
        placeholder="What's it next?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="add-form__button add-form__button--add"
        type="submit"
        onClick={onSubmit}
      >
        Add
      </button>
      <button
        className="add-form__button add-form__button--clear"
        type="submit"
      >
        Clear Completed
      </button>
    </form>
  );
}

export default AddForm;
