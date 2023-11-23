import React, { useState } from 'react';
import './App.css'

import axios from 'axios';

import SearchField from './SearchField';
import RepoCards from './RepoCards';
import SortField from './SortField';

function App() {
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      setRepos(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSort = (option) => {
    setSortOption(option);
    // Implement sorting logic based on the selected option
    // You may need to modify the API request to include sorting parameters
  };

  return (
    <div className='app'>
      <SearchField onSearch={handleSearch} />
      <SortField onSort={handleSort} />
      <RepoCards repos={repos} />
    </div>
  );
}

export default App;
