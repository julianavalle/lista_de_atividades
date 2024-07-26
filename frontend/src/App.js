import React from 'react';
import TaskBoard from './components/TaskBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">LISTA DE ATIVIDADES</h1>
      <TaskBoard />
    </div>
  );
};

export default App;