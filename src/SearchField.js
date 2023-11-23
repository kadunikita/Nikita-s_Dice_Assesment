import React, { useState } from 'react';
import './SearchField.css';

const SearchField = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className='searchForm'>
      <input className='searchField' type="text" value={searchQuery} onChange={handleChange} placeholder="Search repositories" />
      <button className='searchbtn' type="submit">Search</button>
    </form>
  );
};

export default SearchField;
