import React from 'react';
import TaskCard from './TaskCard';
import { Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  console.log('Rendering tasks:', tasks);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskCard
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default TaskList;
