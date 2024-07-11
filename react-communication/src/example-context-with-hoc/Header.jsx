import React from 'react';
import './Header.css';
import { withUser } from './UserContext';

function Header({ name }) {
  return (
    <div className="Header">
      <h2>MyApp (Context with HOC)</h2>
      <span>Hello {name}</span>
    </div>
  );
}

export default withUser(Header);
