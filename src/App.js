import React from 'react';
import Header from './components/Header';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
