// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onClick }) => (
  <div>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onClick(category)}
        className={category === selectedCategory ? 'selected' : 'category-button'}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
