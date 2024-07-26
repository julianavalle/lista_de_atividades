import React from 'react';
import TaskBoard from './components/TaskBoard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  return (
    <div className="App">
      <h1 className="title">LISTA DE ATIVIDADES</h1>
      <TaskBoard />
      <ToastContainer
        position="bottom-right" // Posição das notificações
        autoClose={3000} // Tempo em milissegundos antes de desaparecer
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;