import React, { useState, useEffect } from 'react';
import Column from './Column';
import api from '../services/api';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/activities');
        setTasks(response.data);
        console.log('Fetched tasks:', response.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (status, description) => {
    try {
      const response = await api.post('/activities', { description });
      const newTask = response.data.activity;
      setTasks(prevTasks => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      await api.put(`/activities/${id}`, updatedTask);
      setTasks(prevTasks => prevTasks.map(task => task.id === id ? updatedTask : task));
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/activities/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <div className="task-board">
      <Column
        key="Pendente"
        status="Pendente"
        tasks={tasks.filter(task => !task.completed)}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
      <Column
        key="Em andamento"
        status="Em andamento"
        tasks={[]} // Sem tarefas em andamento por enquanto
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
      <Column
        key="Concluído"
        status="Concluído"
        tasks={tasks.filter(task => task.completed)}
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TaskBoard;