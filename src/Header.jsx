import React from 'react';
import ContactInformation from './ContactInformation';
import { personalInformation } from './data';

function Header() {
  return (
    <div className="header">
      <img src='/logo-white.svg' height="50px" />
      <div style={{ flexGrow: '1' }}>
        <h4>{personalInformation.name}</h4>
        <h6>{personalInformation.title}</h6>
      </div>
      <div>
        <ContactInformation />
      </div>
    </div>
  );
}

export default Header;
