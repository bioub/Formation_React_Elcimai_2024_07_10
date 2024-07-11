import React from 'react';
import './Header.css';
import UserContext from './UserContext';

function Header() {
  return (
    <UserContext.Consumer>
      {({ name }) => (
        <div className="Header">
          <h2>MyApp (Context)</h2>
          <span>Hello {name}</span>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default Header;
