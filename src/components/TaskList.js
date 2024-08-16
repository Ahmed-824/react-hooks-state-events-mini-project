// components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <div>
    {tasks.map((task) => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDelete={() => {}}
      />
    ))}
  </div>
);

export default TaskList;
