import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import './App.scss';

const todos = [
  { id: 1, text: 'Mars' },
  { id: 2, text: 'Earth' },
  { id: 3, text: 'Pluto' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
