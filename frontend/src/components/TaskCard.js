import React, { useState } from 'react';

const TaskCard = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleCheck = () => {
    onUpdate(task.id, { ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newDescription.trim() !== '') {
      onUpdate(task.id, { ...task, description: newDescription });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewDescription(task.description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-card">
      <div className="task-status" onClick={handleCheck}>
        {task.completed ? '✓' : '○'}
      </div>
      <div className="task-content">
        {isEditing ? (
          <div className="task-editing">
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="task-description">
            {task.description}
            {task.completed && <div className="task-completed-at">{new Date(task.completedAt).toLocaleDateString()}</div>}
          </div>
        )}
      </div>
      <div className="task-actions">
        <button onClick={handleEdit}>✎</button>
        <button onClick={handleDelete}>🗑</button>
      </div>
    </div>
  );
};

export default TaskCard;
