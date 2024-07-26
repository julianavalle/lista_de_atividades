import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onUpdate, onDelete }) => {

  console.log('Rendering tasks:', tasks);
  
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;