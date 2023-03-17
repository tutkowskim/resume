import React from 'react';

import Certifications from './Certifications';
import Experience from './Experience';
import Eduction from './Education';
import Projects from './Projects';

function MainContent() {
  return (
    <section className="main-content">
      <Experience />
      <Eduction />
      <Certifications />
      <Projects />
    </section>
  );
}

export default MainContent;
