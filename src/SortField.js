import React from 'react';
import './SortField.css';

const SortField = ({ onSort }) => {
  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <select onChange={handleSort} className='sortOptions'>
      <option value="">Sort by...</option>
      <option value="stargazers_count">Stars</option>
      <option value="watchers_count">Watchers</option>
      <option value="score">Score</option>
      <option value="name">Name</option>
      <option value="created_at">Created At</option>
      <option value="updated_at">Updated At</option>
    </select>
  );
};

export default SortField;
