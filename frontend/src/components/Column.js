import React from 'react';
import TaskList from './TaskList';
import AddTaskCard from './AddTaskCard';

const Column = ({ status, tasks, onAddTask, onUpdateTask, onDeleteTask }) => {
  console.log(`Tasks for ${status}:`, tasks);

  return (
    <div className="column">
      <h2>{status}</h2>
      <AddTaskCard onAdd={(description) => onAddTask(status, description)} />
      <TaskList
        tasks={tasks}
        onUpdate={onUpdateTask}
        onDelete={onDeleteTask}
      />
    </div>
  );
};

export default Column;