// components/NewTaskForm.js
import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && category) {
      onTaskFormSubmit({ text, category });
      setText('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="details">
        Details
        <input
          id="details"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label htmlFor="category">
        Category
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
