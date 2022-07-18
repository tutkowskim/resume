import React from 'react';

import Certifications from './Certifications';
import Experience from './Experience';
import Eduction from './Education';
import Summary from './Summary';

function MainContent() {
  return (
    <section className="main-content">
      <Summary />
      <Experience />
      <Eduction />
      <Certifications />
    </section>
  );
}

export default MainContent;
