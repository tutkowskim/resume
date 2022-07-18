import React from 'react';

import Certifications from './Certifications';
import Experience from './Experience';
import Eduction from './Education';

function MainContent() {
  return (
    <section className="main-content">
      <Experience />
      <Eduction />
      <Certifications />
    </section>
  );
}

export default MainContent;
