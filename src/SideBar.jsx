import React from 'react';
import ContactInformation from './ContactInformation';
import Skills from './Skills';

function SideBar() {
  return (
    <div className="side-bar">
      <section className="side-bar-content">
        <ContactInformation />
        <Skills />
      </section>
    </div>
  );
}

export default SideBar;
