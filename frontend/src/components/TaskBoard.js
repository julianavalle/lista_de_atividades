import React, { useState, useEffect } from 'react';
import Column from './Column';
import api from '../services/api';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/activities');
        const sortedTasks = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setTasks(sortedTasks);
        console.log('Fetched activities:', sortedTasks);
      } catch (error) {
        console.error('Failed to fetch activities:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (description) => {
    try {
      const response = await api.post('/activities', { description });
      const newTask = response.data.activity;
      setTasks(prevTasks => [newTask, ...prevTasks, ]);
      toast.success('Atividade adicionada com sucesso!');
    } catch (error) {
      toast.error('Falha ao adicionar atividade.');
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      await api.put(`/activities/${id}`, updatedTask);
      setTasks(prevTasks => prevTasks.map(task => task.id === id ? updatedTask : task));
      toast.success('Atividade atualizada com sucesso!');
    } catch (error) {
      console.error('Failed to update activity:', error);
      toast.error('Falha ao atualizar atividades.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/activities/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      toast.success('Atividade excluída com sucesso!');
    } catch (error) {
      console.error('Failed to delete activity:', error);
      toast.error('Falha ao excluir atividade.');
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = tasks.filter(task => task.completed === (source.droppableId === "completed"));
    const finish = tasks.filter(task => task.completed === (destination.droppableId === "completed"));

    if (start === finish) {
      const newTaskList = Array.from(start);
      const [movedTask] = newTaskList.splice(source.index, 1);
      newTaskList.splice(destination.index, 0, movedTask);

      setTasks(tasks.map(task =>
        newTaskList.find(t => t.id === task.id) ? newTaskList.find(t => t.id === task.id) : task
      ));
    } else {
      const startTaskList = Array.from(start);
      const [movedTask] = startTaskList.splice(source.index, 1);
      const finishTaskList = Array.from(finish);
      finishTaskList.splice(destination.index, 0, movedTask);

      const updatedTask = { ...movedTask, completed: !movedTask.completed };
      handleUpdateTask(movedTask.id, updatedTask);

      setTasks(tasks.map(task =>
        startTaskList.find(t => t.id === task.id) ? startTaskList.find(t => t.id === task.id) :
        finishTaskList.find(t => t.id === task.id) ? finishTaskList.find(t => t.id === task.id) :
        task
      ));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        {['not-completed', 'completed'].map(status => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column
                  status={status}
                  tasks={tasks.filter(task => task.completed === (status === 'completed'))}
                  onAddTask={handleAddTask}
                  onUpdateTask={handleUpdateTask}
                  onDeleteTask={handleDeleteTask}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;