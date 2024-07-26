import React from 'react';
import TaskBoard from './components/TaskBoard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">LISTA DE ATIVIDADES</h1>
        <div className="info-container" title="Clique para adicionar atividades. Arraste as atividades para mover entre pendentes ou concluídas. Clique para marcar como concluída, editar ou excluir.">
          <span className="info-icon">i</span>
        </div>
      </div>
      <TaskBoard />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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