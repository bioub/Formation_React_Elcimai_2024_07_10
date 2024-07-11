import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

function Header() {
  const name = useSelector((state) => state.name);
  return (
    <div className="Header">
      <h2>MyApp (Redux with Hooks)</h2>
      <span>Hello {name}</span>
    </div>
  );
}
export default Header;
