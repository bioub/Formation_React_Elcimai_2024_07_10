import React from 'react';
import Profile from './Profile';

function Main({ user, onUserUpdate }) {
  return (
    <div className="Main">
      <Profile user={user} onUserUpdate={onUserUpdate} />
    </div>
  );
}

export default Main;
