import React from 'react';
import './Header.css';
import { connect } from 'react-redux';

function Header({ name }) {
  return (
    <div className="Header">
      <h2>MyApp (Redux)</h2>
      <span>Hello {name}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps)(Header);
