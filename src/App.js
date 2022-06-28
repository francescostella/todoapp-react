import React from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.scss';

import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todosSlice';

function App() {
  // Populate the app with mock data
  const dispatch = useDispatch();
  const mockData = [
    'Clean Daily Planet desk',
    'Pick up cape from drycleaning',
    'Clean the batcave',
  ];

  mockData.forEach(item => dispatch(addTodo({ text: item})))

  return (
    <div className="App">
      <Header />
      <AddForm />
      <TodoList />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
