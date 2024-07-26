import React, { useState } from 'react';

const AddTaskCard = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (description.trim()) {
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <div className="add-task-card">
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default AddTaskCard;