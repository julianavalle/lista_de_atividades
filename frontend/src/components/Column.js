import React from 'react';
import TaskList from './TaskList';
import AddTaskCard from './AddTaskCard';

const Column = ({ status, tasks, onAddTask, onUpdateTask, onDeleteTask }) => {
  console.log(`Tasks for ${status}:`, tasks);

  return (
    <div className="column">
      <h2>{status === 'not-completed' ? 'A Fazer' : 'Concluído'}</h2>
      <AddTaskCard onAdd={description => onAddTask(description)} />
      <TaskList
        tasks={tasks}
        onUpdate={onUpdateTask}
        onDelete={onDeleteTask}
      />
    </div>
  );
};

export default Column;