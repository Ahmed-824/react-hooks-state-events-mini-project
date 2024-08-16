// components/App.js
import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import CategoryFilter from './CategoryFilter';
import TaskList from './TaskList';
import { CATEGORIES, TASKS } from '../data';

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onClick={handleCategoryClick}
      />
      <TaskList
        tasks={tasks.filter(task =>
          selectedCategory === 'All' || task.category === selectedCategory
        )}
      />
    </div>
  );
};

export default App;
