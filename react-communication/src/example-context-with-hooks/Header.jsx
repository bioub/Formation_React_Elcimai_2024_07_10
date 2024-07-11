import React, { useContext } from 'react';
import './Header.css';
import { UserContext } from './UserContext';

function Header() {
  const { name } = useContext(UserContext);
  return (
    <div className="Header">
      <h2>MyApp (Context with Hooks)</h2>
      <span>Hello {name}</span>
    </div>
  );
}

export default Header;
