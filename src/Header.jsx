import React from 'react';
import { personalInformation } from './data';

function Header() {
  return (
    <div className="header">
      <img alt='logo' src='/logo-white.svg' height='50px' />
      <div style={{ flexGrow: '1' }}>
        <h4>{personalInformation.name}</h4>
        <h6>{personalInformation.title}</h6>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Header;
