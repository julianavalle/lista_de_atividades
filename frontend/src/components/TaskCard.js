import React from 'react';

const TaskCard = ({ task, onUpdate, onDelete }) => {

  console.log('Rendering task:', task);

  const handleCheck = () => {
    onUpdate(task.id, { ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    // Implementar ainda
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-card">
      <div className="task-status" onClick={handleCheck}>
        {task.completed ? '✓' : '○'}
      </div>
      <div className="task-description">
        {task.description}
        {task.completed && <div className="task-completed-at">{new Date(task.completedAt).toLocaleDateString()}</div>}
      </div>
      <button onClick={handleEdit}>✎</button>
      <button onClick={handleDelete}>🗑</button>
    </div>
  );
};

export default TaskCard;