import React from 'react';
import './RepoCards.css'

const RepoCards = ({ repos }) => {
  return (
    <div className='cards'>
      {repos.map((repo) => (
        <div key={repo.id} className='card'>
          <img src={repo.owner.avatar_url} alt="Avatar" width="50" height="50" />
          <h2>{repo.name}</h2>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Description: {repo.description}</p>
          <p>Language: {repo.language}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoCards;
