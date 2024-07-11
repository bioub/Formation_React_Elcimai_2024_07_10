import React from 'react';
import './Header.css';

function Header({ user }) {
  return (
    <div className="Header">
      <h2>MyApp (Props)</h2>
      <span>Hello {user.name}</span>
    </div>
  );
}

export default Header;
